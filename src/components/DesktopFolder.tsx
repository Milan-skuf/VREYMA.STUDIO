import React from 'react';
import { Folder, FolderOpen } from 'lucide-react';
import { WindowId } from '../types';

interface DesktopFolderProps {
  id: WindowId;
  label: string;
  onOpen: (id: WindowId) => void;
  isOpen?: boolean;
}

export const DesktopFolder: React.FC<DesktopFolderProps> = ({
  id,
  label,
  onOpen,
  isOpen = false,
}) => {
  return (
    <button
      onClick={() => onOpen(id)}
      className="group flex flex-col items-center gap-2.5 p-3 rounded-2xl transition-all duration-200 cursor-pointer hover:bg-zinc-100/90 border border-transparent hover:border-zinc-300 active:scale-95 text-center focus:outline-none"
    >
      {/* Folder Container */}
      <div className="relative w-16 h-14 sm:w-18 sm:h-16 flex items-center justify-center">
        
        {/* Sleek Minimal Folder Graphic */}
        <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
          <div className={`w-14 h-12 rounded-xl border flex items-center justify-center transition-all ${
            isOpen 
              ? 'bg-zinc-100 border-black text-black shadow-md' 
              : 'bg-white border-zinc-200 text-zinc-700 group-hover:border-black group-hover:text-black shadow-sm'
          }`}>
            {isOpen ? (
              <FolderOpen className="w-6 h-6 text-black" />
            ) : (
              <Folder className="w-6 h-6 group-hover:text-black transition-colors" />
            )}
          </div>

          {/* Active Dot */}
          {isOpen && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black" />
          )}
        </div>
      </div>

      {/* Folder Monospace Label */}
      <span className="text-[11px] font-mono font-bold text-zinc-800 group-hover:text-black tracking-widest uppercase transition-colors">
        {label}
      </span>
    </button>
  );
};

