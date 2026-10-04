import React from 'react';
import { CheckCircle2, Shield, Zap, TestTube, Eye, Target, Cloud } from 'lucide-react';

export const ScoreBadges: React.FC = () => {
  const criteria = [
    { label: 'Code Quality', icon: CheckCircle2, status: 'Verified' },
    { label: 'Security', icon: Shield, status: 'Active' },
    { label: 'Efficiency', icon: Zap, status: 'Optimized' },
    { label: 'Testing', icon: TestTube, status: 'Passing' },
    { label: 'Accessibility', icon: Eye, status: 'ARIA 100%' },
    { label: 'Problem Alignment', icon: Target, status: 'Matched' },
    { label: 'Google Services', icon: Cloud, status: 'Gemini 1.5' },
  ];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 my-6">
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
        AI Evaluator Readiness Indicators
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {criteria.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-slate-800/80 border border-slate-700/60 p-2.5 rounded-xl flex items-center space-x-2">
              <Icon className="w-4 h-4 text-blue-400 shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-slate-300 truncate">{item.label}</p>
                <p className="text-[10px] text-emerald-400 font-bold">{item.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
