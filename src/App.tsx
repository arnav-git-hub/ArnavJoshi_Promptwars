import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ScoreBadges } from './components/ScoreBadges';
import { DecisionInputForm } from './components/DecisionInputForm';
import { BlindSpotResults } from './components/BlindSpotResults';
import { DecisionHistory } from './components/DecisionHistory';
import { Footer } from './components/Footer';
import { BlindSpotAnalysis } from './types';
import { analyzeBlindSpots } from './services/gemini';

const LOCAL_STORAGE_KEY = 'blindspot_ai_history_v1';

export const App: React.FC = () => {
  const [analysis, setAnalysis] = useState<BlindSpotAnalysis | null>(null);
  const [history, setHistory] = useState<BlindSpotAnalysis[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Failed to load history:', e);
    }
  }, []);

  const saveToHistory = (newAnalysis: BlindSpotAnalysis) => {
    const updated = [newAnalysis, ...history.filter((h) => h.id !== newAnalysis.id)].slice(0, 10);
    setHistory(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save to LocalStorage:', e);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const handleAnalyze = async (
    title: string,
    context: string,
    motivations: string,
    assumptions: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeBlindSpots(title, context, motivations, assumptions);
      setAnalysis(result);
      saveToHistory(result);
    } catch (err: any) {
      setError(err.message || 'Failed to generate blind spot analysis.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ScoreBadges />
        <DecisionInputForm onAnalyze={handleAnalyze} loading={loading} />

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 p-4 rounded-2xl my-4 text-sm">
            {error}
          </div>
        )}

        <DecisionHistory
          history={history}
          onSelectHistory={(item) => setAnalysis(item)}
          onClearHistory={handleClearHistory}
        />

        {analysis && <BlindSpotResults analysis={analysis} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
