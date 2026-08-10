import React, { useState } from 'react';
import { Terminal, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ABOUT_INFO, SKILL_CATEGORIES } from '../../data/about';
import { WindowId } from '../../types';
import profilePhoto from '../../assets/images/profile_photo.png';

interface AboutWindowProps {
  onOpenWindow: (id: WindowId) => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = ({ onOpenWindow }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'skills'>('bio');

  return (
    <div className="space-y-6 font-sans text-zinc-900">
      
      {/* Top Banner / Avatar Header */}
      <div className="relative rounded-2xl p-6 bg-zinc-50 border border-zinc-200 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Terminal className="w-48 h-48 text-black" />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-black border border-black p-1 flex-shrink-0 overflow-hidden">
            <img
              src={profilePhoto}
              alt={ABOUT_INFO.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-black text-white border border-black px-3 py-0.5 rounded-full text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-stack Digital Architect</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black font-sans tracking-tight">{ABOUT_INFO.name}</h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-600 font-bold">{ABOUT_INFO.role} • {ABOUT_INFO.location}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-zinc-200 font-mono text-xs">
        <button
          onClick={() => setActiveTab('bio')}
          className={`pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'bio'
              ? 'border-black text-black font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          [01] BIOGRAPHY
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'skills'
              ? 'border-black text-black font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          [02] SKILLS & TECH
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'bio' && (
        <div className="space-y-6">
          <div className="text-zinc-700 text-xs sm:text-sm leading-relaxed space-y-4 font-normal">
            {ABOUT_INFO.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {ABOUT_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center space-y-1 hover:border-black transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-black font-mono">{stat.value}</div>
                <div className="text-[11px] font-mono text-zinc-600 font-bold uppercase tracking-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-between items-center bg-zinc-900 text-white border border-zinc-800 p-4 rounded-xl">
            <div>
              <div className="font-mono font-bold text-white text-xs">// WANT TO DISCUSS A PROJECT?</div>
              <div className="text-xs text-zinc-400">Estimate & architecture breakdown in 15 mins</div>
            </div>
            <button
              onClick={() => onOpenWindow('contacts')}
              className="bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {activeTab === 'skills' && (
        <div className="space-y-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-3 bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
              <h3 className="text-xs font-bold text-black font-mono tracking-wider uppercase">[ {cat.title} ]</h3>
              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1 font-mono">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-800 font-medium">{skill.name}</span>
                      <span className="text-black font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-black h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

