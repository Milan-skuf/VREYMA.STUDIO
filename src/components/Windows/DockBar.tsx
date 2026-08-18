import React from 'react';
import { Send, Instagram, FileText, Music, Compass, Trash2 } from 'lucide-react';
import { WindowId } from '../../types';

interface DockBarProps {
  onOpenWindow: (id: WindowId) => void;
  activeWindows: WindowId[];
  onOpenTelegram: () => void;
  onOpenInstagram: () => void;
}

export const DockBar: React.FC<DockBarProps> = ({
  onOpenWindow,
  activeWindows,
  onOpenTelegram,
  onOpenInstagram,
}) => {
  if (activeWindows.length > 0) {
    return null;
  }

  return (
    <div className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-full px-3 font-mono animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white/95 backdrop-blur-2xl border border-zinc-300 p-1.5 sm:p-2 rounded-2xl flex items-center gap-1.5 sm:gap-3 shadow-xl shadow-black/5">
        
        {/* Telegram Icon */}
        <button
          onClick={onOpenTelegram}
          className="group relative p-2 sm:p-3 rounded-xl bg-zinc-100 border border-zinc-200 hover:border-black text-zinc-700 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Telegram — @Djambovic"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5 -rotate-12 group-hover:rotate-0 transition-transform text-black" />
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Telegram (@Djambovic)
          </span>
        </button>

        {/* Instagram Icon */}
        <button
          onClick={onOpenInstagram}
          className="group relative p-2 sm:p-3 rounded-xl bg-zinc-100 border border-zinc-200 hover:border-black text-zinc-700 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Instagram"
        >
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Instagram
          </span>
        </button>

        {/* Notes (FileText) Icon */}
        <button
          onClick={() => onOpenWindow('notes')}
          className="group relative p-2 sm:p-3 rounded-xl bg-zinc-100 border border-zinc-200 hover:border-black text-zinc-700 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Заметки студии"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          {activeWindows.includes('notes') && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black" />
          )}
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            notes.app
          </span>
        </button>

        {/* Music Player Icon */}
        <button
          onClick={() => onOpenWindow('music')}
          className="group relative p-2 sm:p-3 rounded-xl bg-zinc-100 border border-zinc-200 hover:border-black text-zinc-700 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Lo-Fi Плеер"
        >
          <Music className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          {activeWindows.includes('music') && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black" />
          )}
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            audio_player.app
          </span>
        </button>

        {/* Works Compass Icon */}
        <button
          onClick={() => onOpenWindow('works')}
          className="group relative p-2 sm:p-3 rounded-xl bg-zinc-100 border border-zinc-200 hover:border-black text-zinc-700 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Портфолио работ"
        >
          <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:rotate-45 transition-transform duration-300" />
          {activeWindows.includes('works') && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black" />
          )}
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            works.app
          </span>
        </button>

        <div className="w-[1px] h-5 sm:h-6 bg-zinc-200 mx-0.5" />

        {/* Trash Icon */}
        <button
          onClick={() => onOpenWindow('trash')}
          className="group relative p-2 sm:p-3 rounded-xl bg-zinc-100 border border-zinc-200 hover:border-black text-zinc-500 hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Корзина"
        >
          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
          {activeWindows.includes('trash') && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-500" />
          )}
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            trash.app
          </span>
        </button>

      </div>
    </div>
  );
};

