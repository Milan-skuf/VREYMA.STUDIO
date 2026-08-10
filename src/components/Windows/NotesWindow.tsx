import React, { useState } from 'react';
import { FileText, Save, Check } from 'lucide-react';

export const NotesWindow: React.FC = () => {
  const [noteText, setNoteText] = useState<string>(`// ILNUR.STUDIO — ENGINEERING NOTES & DESIGN MANIFESTO

1. ANIMATIONS: Fluid physics, responsive micro-interactions (cubic-bezier & spring timing).
2. TYPOGRAPHY: Strict JetBrains Mono & Plus Jakarta Sans hierarchy, precise line-heights.
3. PERFORMANCE: Sub-second initial render times, zero unneeded renders, lightweight WebGL.
4. TOUCH FIRST: Flawless touch target scaling & gesture control on mobile devices.

// ACTIVE ROADMAP:
[x] Refactor UI architecture to match xsai.vision aesthetic
[x] Monospaced system controls & high-contrast light layout
[ ] Launch 3D interactive shader showcase
[ ] Finalize client case study breakdowns`);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4 font-mono text-zinc-900">
      <div className="flex justify-between items-center bg-zinc-50 p-3 rounded-xl border border-zinc-200">
        <div className="flex items-center gap-2 text-xs text-black font-bold">
          <FileText className="w-4 h-4 text-black" />
          <span>developer_notes.txt</span>
        </div>
        <button
          onClick={handleSave}
          className="bg-black hover:bg-zinc-800 text-white text-xs px-3 py-1.5 rounded-lg font-mono font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          {saved ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>SAVED</span>
            </>
          ) : (
            <>
              <Save className="w-3.5 h-3.5" />
              <span>SAVE</span>
            </>
          )}
        </button>
      </div>

      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        rows={14}
        className="w-full bg-white border border-zinc-200 rounded-2xl p-4 font-mono text-xs sm:text-sm text-black focus:outline-none focus:border-black leading-relaxed custom-scrollbar resize-none font-medium"
      />
    </div>
  );
};

