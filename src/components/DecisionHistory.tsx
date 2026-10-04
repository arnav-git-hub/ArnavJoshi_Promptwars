import React from 'react';
import { BlindSpotAnalysis } from '../types';
import { History, Trash2, ArrowUpRight, Clock } from 'lucide-react';

interface DecisionHistoryProps {
  history: BlindSpotAnalysis[];
  onSelectHistory: (item: BlindSpotAnalysis) => void;
  onClearHistory: () => void;
}

export const DecisionHistory: React.FC<DecisionHistoryProps> = ({
  history,
  onSelectHistory,
  onClearHistory,
}) => {
  if (history.length === 0) return null;

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 my-6 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center space-x-2 text-slate-300">
          <History className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold">Saved Decision Analyses ({history.length})</h3>
        </div>
        <button
          onClick={onClearHistory}
          className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1 transition"
        >
          <Trash2 className="w-3.5 h-3.5 mr-1" /> Clear History
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {history.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectHistory(item)}
            className="text-left bg-slate-950 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 p-3.5 rounded-2xl transition group flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-300 line-clamp-1 flex items-center justify-between">
                <span>{item.decisionTitle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition" />
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{item.summary}</p>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-slate-500 mt-3 pt-2 border-t border-slate-900">
              <Clock className="w-3 h-3" />
              <span>{new Date(item.timestamp).toLocaleDateString()}</span>
              <span>•</span>
              <span className="text-purple-400 font-medium">{item.hiddenAssumptions.length} Assumptions Uncovered</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
