import React from 'react';
import { ArrowUpRight, Layers, Sparkles, Terminal } from 'lucide-react';
import { WindowId } from '../types';

interface HeroCardProps {
  onOpenWindow: (id: WindowId) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onOpenWindow }) => {
  return (
    <div className="max-w-lg w-full bg-white border border-zinc-200 hover:border-zinc-400 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xl shadow-black/5 transition-all duration-300 relative overflow-hidden group">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />

      {/* Status Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-zinc-100 border border-zinc-200 px-2.5 sm:px-3 py-1 rounded-full text-zinc-700 text-[10px] sm:text-[11px] font-mono truncate">
          <Terminal className="w-3.5 h-3.5 text-black flex-shrink-0" />
          <span className="truncate">VREYMA.STUDIO // ONLINE</span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold">В СЕТИ</span>
        </div>
      </div>
      
      {/* Header Title */}
      <div className="space-y-1 mb-3">
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-black tracking-tight text-black font-sans">
            VREYMA.STUDIO
          </h1>
          <span className="font-mono text-xs text-zinc-400 font-bold">©2025</span>
        </div>
        <p className="font-mono text-[10px] sm:text-xs text-zinc-800 font-bold tracking-widest uppercase">
          ПРЕМИУМ-САЙТЫ • 3D МАКЕТЫ ОДЕЖДЫ • TELEGRAM MINI APPS
        </p>
      </div>

      {/* Intro paragraph */}
      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 sm:mb-6 font-normal">
        Разработка минималистичных премиум-сайтов, интерактивных 3D-интерфейсов, 3D макетов и рекламы одежды, ИИ-контента для брендов, а также Telegram Mini Apps и ботов под ключ.
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-7">
        {['3D Clothing', 'Telegram Mini Apps', '3D / WebGL', 'AI Fashion Content', 'React / TypeScript', 'Telegram Bots'].map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] sm:text-[11px] bg-zinc-100 text-zinc-800 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg border border-zinc-200 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col xs:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
        <button
          onClick={() => onOpenWindow('contacts')}
          className="flex-1 bg-black text-white hover:bg-zinc-800 font-mono font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer group/btn active:scale-[0.98]"
        >
          <span>НАЧАТЬ ПРОЕКТ</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={() => onOpenWindow('works')}
          className="bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-900 font-mono text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer font-bold active:scale-[0.98]"
        >
          <Layers className="w-4 h-4 text-black" />
          <span>ПОРТФОЛИО</span>
        </button>
      </div>

    </div>
  );
};

