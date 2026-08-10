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
  initialHeight = 'max-h-[85vh]',
}) => {
  if (!isOpen || isMinimized) return null;

  return (
    <div
      onClick={() => onFocus(id)}
      style={{ zIndex }}
      className={`fixed transition-all duration-200 ${
        isMaximized
          ? 'inset-2 sm:inset-6 max-w-none max-h-none'
          : `top-16 sm:top-20 left-1/2 -translate-x-1/2 w-[94%] ${initialWidth} ${initialHeight}`
      }`}
    >
      <div className="w-full h-full flex flex-col bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/10 overflow-hidden text-zinc-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Minimal Window Header Bar */}
        <div 
          onDoubleClick={() => onMaximize(id)}
          className="bg-zinc-100 border-b border-zinc-200 px-4 py-3 flex items-center justify-between select-none cursor-grab active:cursor-grabbing font-mono text-xs text-zinc-900"
        >
          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
              title="Close"
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 flex items-center justify-center group cursor-pointer"
            >
              <X className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 font-bold" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onMinimize(id);
              }}
              title="Minimize"
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center group cursor-pointer"
            >
              <Minus className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 font-bold" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onMaximize(id);
              }}
              title={isMaximized ? 'Restore' : 'Maximize'}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 flex items-center justify-center group cursor-pointer"
            >
              {isMaximized ? (
                <Minimize2 className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 font-bold" />
              ) : (
                <Maximize2 className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 font-bold" />
              )}
            </button>
          </div>

          {/* Window Monospace Title */}
          <div className="flex items-center gap-2 text-black font-extrabold tracking-wider truncate max-w-[220px] sm:max-w-md">
            <Terminal className="w-3.5 h-3.5 text-black flex-shrink-0" />
            <span className="truncate">{title}</span>
          </div>

          {/* ID indicator */}
          <div className="text-[10px] text-zinc-500 font-mono hidden sm:block">
            {id}.exe
          </div>
        </div>

        {/* Window Body Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 text-zinc-800 bg-white">
          {children}
        </div>

      </div>
    </div>
  );
};

