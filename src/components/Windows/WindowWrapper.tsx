import React from 'react';
import { X, Minus, Maximize2, Minimize2, Terminal } from 'lucide-react';
import { WindowId } from '../../types';

interface WindowWrapperProps {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  onClose: (id: WindowId) => void;
  onMinimize: (id: WindowId) => void;
  onMaximize: (id: WindowId) => void;
  onFocus: (id: WindowId) => void;
  children: React.ReactNode;
  initialWidth?: string;
  initialHeight?: string;
}

export const WindowWrapper: React.FC<WindowWrapperProps> = ({
  id,
  title,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
  initialWidth = 'max-w-4xl',
  initialHeight = 'h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)] max-h-[760px]',
}) => {
  if (!isOpen || isMinimized) return null;

  return (
    <div
      onClick={() => onFocus(id)}
      style={{ zIndex }}
      className={`fixed transition-all duration-200 ${
        isMaximized
          ? 'inset-2 sm:inset-4 max-w-none h-[calc(100dvh-16px)] sm:h-[calc(100vh-32px)]'
          : `top-14 sm:top-24 bottom-3 sm:bottom-auto left-1/2 -translate-x-1/2 w-[96%] sm:w-[92%] ${initialWidth} ${initialHeight} max-h-[calc(100dvh-70px)] sm:max-h-[760px]`
      }`}
    >
      <div className="w-full h-full flex flex-col bg-white border border-zinc-300 sm:border-2 sm:border-zinc-300/90 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] ring-1 ring-zinc-400/40 overflow-hidden text-zinc-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Light Metallic Gray Window Header Bar */}
        <div 
          onDoubleClick={() => onMaximize(id)}
          className="bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 text-zinc-900 border-b border-zinc-300/90 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between select-none cursor-grab active:cursor-grabbing font-mono text-xs shadow-xs"
        >
          {/* macOS Controls with expanded touch target */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
              title="Закрыть"
              className="p-1 sm:p-0 rounded-full hover:bg-rose-100 transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center group transition-transform hover:scale-110 shadow-xs">
                <X className="w-2.5 h-2.5 text-white sm:opacity-0 group-hover:opacity-100 font-bold" />
              </div>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onMinimize(id);
              }}
              title="Свернуть"
              className="p-1 sm:p-0 rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center group transition-transform hover:scale-110 shadow-xs">
                <Minus className="w-2.5 h-2.5 text-white sm:opacity-0 group-hover:opacity-100 font-bold" />
              </div>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onMaximize(id);
              }}
              title={isMaximized ? 'Восстановить' : 'Развернуть'}
              className="p-1 sm:p-0 rounded-full hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center group transition-transform hover:scale-110 shadow-xs">
                {isMaximized ? (
                  <Minimize2 className="w-2.5 h-2.5 text-white sm:opacity-0 group-hover:opacity-100 font-bold" />
                ) : (
                  <Maximize2 className="w-2.5 h-2.5 text-white sm:opacity-0 group-hover:opacity-100 font-bold" />
                )}
              </div>
            </button>
          </div>

          {/* Window Monospace Title */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-900 font-black tracking-wider truncate max-w-[180px] xs:max-w-[220px] sm:max-w-md text-[11px] sm:text-xs">
            <Terminal className="w-3.5 h-3.5 text-black flex-shrink-0" />
            <span className="truncate">{title}</span>
          </div>

          {/* Mobile direct close button / ID indicator */}
          <div className="flex items-center gap-2">
            <div className="text-[10px] text-zinc-600 font-mono font-semibold hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{id}.app</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
              className="sm:hidden p-1 rounded-lg bg-zinc-300/80 hover:bg-zinc-400/80 text-zinc-800"
              title="Закрыть окно"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Window Body Container */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-3.5 sm:p-6 text-zinc-800 bg-white select-text">
          {children}
        </div>

      </div>
    </div>
  );
};

