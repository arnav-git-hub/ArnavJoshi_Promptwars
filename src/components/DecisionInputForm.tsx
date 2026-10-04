import React, { useState } from 'react';
import { Compass, Lightbulb, Play, Loader2, Sparkles, HelpCircle } from 'lucide-react';
import { DecisionPreset } from '../types';

interface DecisionInputFormProps {
  onAnalyze: (title: string, context: string, motivations: string, assumptions: string) => void;
  loading: boolean;
}

const PRESETS: DecisionPreset[] = [
  {
    id: 'internship',
    title: 'Accepting a 6-Month Internship',
    context: '6-month role offering $1,200/mo stipend, 40 hrs/week, 20 min from home. I have college classes 4 days a week with midterms in month 3.',
    motivations: 'High stipend, close to home, gain corporate industry experience for resume.',
    assumptions: 'Assuming work hours can be adjusted around college exams and that senior devs will provide dedicated mentorship.'
  },
  {
    id: 'startup',
    title: 'Joining a Pre-Seed Tech Startup',
    context: 'Offered Co-Founder CTO role at an early startup. 50% lower salary but 5% equity. Requires 60-hour work weeks.',
    motivations: 'High upside equity potential, build product architecture from scratch, fast-track leadership.',
    assumptions: 'Assuming the startup will raise Series A funding within 12 months and my health can sustain high stress.'
  },
  {
    id: 'relocation',
    title: 'Relocating to a New City for Job',
    context: 'Higher paying offer ($95k vs $70k current) in San Francisco, but double the cost of living and away from family.',
    motivations: 'Career prestige, higher base salary, networking in tech hub.',
    assumptions: 'Assuming net savings will be higher despite rent costs and that social integration will be easy.'
  }
];

export const DecisionInputForm: React.FC<DecisionInputFormProps> = ({ onAnalyze, loading }) => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [motivations, setMotivations] = useState('');
  const [assumptions, setAssumptions] = useState('');

  const handleApplyPreset = (preset: DecisionPreset) => {
    setTitle(preset.title);
    setContext(preset.context);
    setMotivations(preset.motivations);
    setAssumptions(preset.assumptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAnalyze(title, context, motivations, assumptions);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-400" />
            Decision Reasoning Studio
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Describe a decision you are considering. The AI will uncover your unstated assumptions and blind spots without deciding for you.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-yellow-400" /> Presets:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-lg border border-slate-700 transition"
              >
                {preset.id === 'internship' ? '🎓 6-Mo Internship' : preset.id === 'startup' ? '🚀 Startup Offer' : '🌆 Relocation'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" aria-label="Decision Input Form">
        <div>
          <label htmlFor="decision-title" className="block text-sm font-semibold text-slate-200 mb-1.5 flex items-center justify-between">
            <span>1. What decision are you evaluating? <span className="text-amber-400">*</span></span>
            <span className="text-xs font-normal text-slate-400">e.g. Accepting a 6-month internship</span>
          </label>
          <input
            id="decision-title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Should I accept the 6-month software internship?"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus-ring text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="decision-context" className="block text-xs font-semibold text-slate-300 mb-1.5">
              2. Key Details & Context
            </label>
            <textarea
              id="decision-context"
              rows={3}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Stipend, location, working hours, college schedule, role details..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-500 focus-ring text-xs resize-none"
            />
          </div>

          <div>
            <label htmlFor="decision-motivations" className="block text-xs font-semibold text-slate-300 mb-1.5">
              3. Primary Motivations (Why consider it?)
            </label>
            <textarea
              id="decision-motivations"
              rows={3}
              value={motivations}
              onChange={(e) => setMotivations(e.target.value)}
              placeholder="Good stipend, close to home, resume value..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-500 focus-ring text-xs resize-none"
            />
          </div>

          <div>
            <label htmlFor="decision-assumptions" className="block text-xs font-semibold text-slate-300 mb-1.5">
              4. Stated Assumptions (What do you assume?)
            </label>
            <textarea
              id="decision-assumptions"
              rows={3}
              value={assumptions}
              onChange={(e) => setAssumptions(e.target.value)}
              placeholder="Assuming mentorship will be provided, assuming exam dates won't conflict..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-500 focus-ring text-xs resize-none"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
          <div className="flex items-center text-xs text-amber-400/90 space-x-1.5">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>The AI will analyze hidden trade-offs & ask probing questions without making the choice for you.</span>
          </div>

          <button
            type="submit"
            disabled={loading || !title.trim()}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-purple-600 to-blue-600 hover:from-amber-400 hover:to-blue-500 text-white font-semibold text-sm px-7 py-3 rounded-xl focus-ring transition disabled:opacity-50 shadow-xl"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Uncovering Blind Spots with Gemini...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-1 text-yellow-300" />
                <span>Analyze Blind Spots</span>
                <Play className="w-3.5 h-3.5 ml-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
