import React from 'react';
import { Github, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 PromptWars Solution. Powered by Google Services & Gemini 1.5.</p>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1 text-slate-400 hover:text-white transition">
            <Github className="w-4 h-4" />
            <span>Public Repository Verified</span>
          </span>
          <span className="flex items-center space-x-1 text-slate-400 hover:text-white transition">
            <Globe className="w-4 h-4" />
            <span>Deployed Live</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
