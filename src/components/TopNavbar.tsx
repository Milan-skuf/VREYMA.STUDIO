import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { WindowId } from '../types';

interface TopNavbarProps {
  onOpenWindow: (id: WindowId) => void;
  activeWindows: WindowId[];
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onOpenWindow,
  activeWindows,
  isMuted,
  onToggleMute,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const [time, setTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (activeWindows.length > 0) {
    return null;
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-white/90 backdrop-blur-xl border border-zinc-200 text-zinc-900 rounded-2xl px-5 py-3 flex items-center justify-between shadow-xl shadow-black/5">
        
        {/* Brand & Monospace Tag */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenWindow('about')}
            className="flex items-center gap-2 group cursor-pointer whitespace-nowrap"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-black group-hover:scale-125 transition-all flex-shrink-0" />
            <span className="font-mono font-extrabold tracking-widest text-sm text-black group-hover:opacity-70 transition-opacity whitespace-nowrap">
              VREYMA.STUDIO
            </span>
            <span className="hidden xl:inline-block font-mono text-[10px] text-zinc-500 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded whitespace-nowrap">
              v2.5.0
            </span>
          </button>

          {/* Quick Legal Links */}
          <div className="hidden lg:flex items-center gap-2 ml-1 pl-3 border-l border-zinc-200 font-mono text-xs text-zinc-400 whitespace-nowrap">
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-black transition-colors cursor-pointer whitespace-nowrap"
            >
              /политика
            </button>
            <span>/</span>
            <button 
              onClick={onOpenTerms}
              className="hover:text-black transition-colors cursor-pointer whitespace-nowrap"
            >
              /условия
            </button>
          </div>
        </div>

        {/* Minimal Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5 font-mono text-xs tracking-wider whitespace-nowrap flex-shrink-0">
          <button
            onClick={() => onOpenWindow('works')}
            className={`transition-all cursor-pointer flex items-center gap-1.5 py-1 whitespace-nowrap flex-shrink-0 ${
              activeWindows.includes('works')
                ? 'text-black border-b-2 border-black font-bold'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            <span className="whitespace-nowrap">[01] РАБОТЫ</span>
          </button>

          <button
            onClick={() => onOpenWindow('pricing')}
            className={`transition-all cursor-pointer flex items-center gap-1.5 py-1 whitespace-nowrap flex-shrink-0 ${
              activeWindows.includes('pricing')
                ? 'text-black border-b-2 border-black font-bold'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            <span className="whitespace-nowrap">[02] ЦЕНЫ</span>
          </button>

          <button
            onClick={() => onOpenWindow('contacts')}
            className={`transition-all cursor-pointer flex items-center gap-1.5 py-1 whitespace-nowrap flex-shrink-0 ${
              activeWindows.includes('contacts')
                ? 'text-black border-b-2 border-black font-bold'
                : 'text-zinc-500 hover:text-black'
            }`}
          >
            <span className="whitespace-nowrap">[03] КОНТАКТЫ</span>
          </button>
        </nav>

        {/* Right Status & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs whitespace-nowrap flex-shrink-0">
          {/* Availability Status */}
          <div className="flex items-center gap-2 bg-zinc-100 border border-zinc-300 px-2.5 sm:px-3 py-1 rounded-full text-zinc-900 text-[11px] font-bold whitespace-nowrap flex-shrink-0">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="hidden lg:inline font-mono tracking-tight whitespace-nowrap">СВОБОДЕН ДЛЯ ПРОЕКТОВ</span>
            <span className="lg:hidden font-mono whitespace-nowrap">СВОБОДЕН</span>
          </div>

          {/* Audio toggle */}
          <button
            onClick={onToggleMute}
            title={isMuted ? 'Включить звук' : 'Выключить звук'}
            className="p-1.5 rounded-lg bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 text-zinc-600 hover:text-black transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-400" /> : <Volume2 className="w-3.5 h-3.5 text-black" />}
          </button>

          {/* Live Clock */}
          <div className="font-mono text-xs font-bold tracking-wider text-black bg-zinc-100 px-3 py-1 rounded-lg border border-zinc-200">
            {time || '00:00:00'}
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-2xl border border-zinc-200 text-zinc-900 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl font-mono text-xs animate-in fade-in duration-200">
          <button
            onClick={() => {
              onOpenWindow('about');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex justify-between items-center"
          >
            <span className="text-black font-bold">[00] О НАС</span>
            <span className="text-[10px] text-zinc-400">профиль.app</span>
          </button>
          <button
            onClick={() => {
              onOpenWindow('works');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex justify-between items-center"
          >
            <span className="text-black font-bold">[01] РАБОТЫ</span>
          </button>
          <button
            onClick={() => {
              onOpenWindow('pricing');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex justify-between items-center"
          >
            <span className="text-black font-bold">[02] ПРОЦЕСС И ЦЕНЫ</span>
            <span className="text-[10px] text-zinc-500">Калькулятор</span>
          </button>
          <button
            onClick={() => {
              onOpenWindow('contacts');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex justify-between items-center"
          >
            <span className="text-black font-bold">[03] КОНТАКТЫ</span>
            <span className="text-[10px] text-emerald-600 font-bold">Прямая связь</span>
          </button>
          <div className="pt-2 border-t border-zinc-200 flex justify-around text-[10px] text-zinc-500">
            <button onClick={() => { onOpenPrivacy(); setMobileMenuOpen(false); }}>/политика</button>
            <button onClick={() => { onOpenTerms(); setMobileMenuOpen(false); }}>/условия</button>
          </div>
        </div>
      )}
    </header>
  );
};

