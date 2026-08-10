import React, { useState } from 'react';
import { Terminal, ArrowUpRight, Users, GraduationCap, Palette, Code } from 'lucide-react';
import { ABOUT_INFO, SKILL_CATEGORIES } from '../../data/about';
import { WindowId } from '../../types';

const DEFAULT_AVATAR = '/images/photo_2026-04-21_17-10-58.jpg';

const getAvatarUrl = (url?: string): string => {
  if (!url) return DEFAULT_AVATAR;
  let clean = url.trim();
  if (clean.startsWith('public/')) clean = '/' + clean.substring(7);
  if (clean.startsWith('/public/')) clean = clean.substring(7);
  return clean;
};

interface AboutWindowProps {
  onOpenWindow: (id: WindowId) => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = ({ onOpenWindow }) => {
  const [activeTab, setActiveTab] = useState<'team' | 'skills'>('team');

  return (
    <div className="space-y-6 font-sans text-zinc-900">
      
      {/* Studio Header Banner */}
      <div className="relative rounded-2xl p-6 bg-zinc-50 border border-zinc-200 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Terminal className="w-48 h-48 text-black" />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-black text-white border border-black px-3 py-0.5 rounded-full text-xs font-mono font-bold">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>Команда VREYMA.STUDIO • 2 специалиста</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black font-sans tracking-tight">{ABOUT_INFO.name}</h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-600 font-bold">{ABOUT_INFO.role} • {ABOUT_INFO.location}</p>
          </div>

          {/* Studio Avatar Photo Badge - Large & Prominent */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-3xl bg-black border-2 border-zinc-900 flex-shrink-0 overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-300 relative group">
            <img
              src={getAvatarUrl(ABOUT_INFO.avatar)}
              alt={ABOUT_INFO.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = DEFAULT_AVATAR;
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-zinc-200 font-mono text-xs">
        <button
          onClick={() => setActiveTab('team')}
          className={`pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'team'
              ? 'border-black text-black font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          [01] КОМАНДА СТУДИИ
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`pb-3 px-4 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'skills'
              ? 'border-black text-black font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          [02] НАВЫКИ И СТЕК
        </button>
      </div>

      {/* Team Tab Content */}
      {activeTab === 'team' && (
        <div className="space-y-6">
          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
            {ABOUT_INFO.tagline}
          </p>

          {/* Unified Team Card (Единая плашка) */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sm:p-6 space-y-6 hover:border-black transition-all shadow-sm">
            
            {/* Lead Dev Section */}
            <div className="space-y-3">
              <div className="flex items-start sm:items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-800">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-black font-sans tracking-tight">Основатель & Lead Developer</h3>
                    <p className="text-xs font-mono text-zinc-500 font-medium">Веб-архитектор • 3D WebGL • Telegram Apps</p>
                  </div>
                </div>
                <span className="bg-zinc-900 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold">
                  Fullstack & 3D Engineer
                </span>
              </div>

              <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                Отвечает за техническую архитектуру цифровых продуктов, разработку сложной WebGL/3D интерактивности, 3D макетов одежды для бренд-коммуникаций и экосистемных Telegram Mini Apps.
              </p>

              <div className="pt-1 space-y-1">
                <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Ключевые направления:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">Премиум веб-сайты</span>
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">Интерактивные 3D-интерфейсы</span>
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">3D макеты одежды & Fashion</span>
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">Telegram Mini Apps под ключ</span>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-zinc-200/80 my-2" />

            {/* Designer Section */}
            <div className="space-y-3">
              <div className="flex items-start sm:items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100 border border-pink-300 rounded-xl text-pink-800">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-extrabold text-black font-sans tracking-tight">3D & Графический Дизайнер</h3>
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold">
                        <GraduationCap className="w-3 h-3 text-amber-600" />
                        <span>Выпускница ККАСиЦТ</span>
                      </span>
                    </div>
                    <p className="text-xs font-mono text-zinc-500 font-medium">3D Интерьеры • Графический дизайн во всех сферах • Чертежи</p>
                  </div>
                </div>
                <span className="bg-zinc-900 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold">
                  3D Interior & Graphic Designer
                </span>
              </div>

              <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                Выпускница колледжа ККАСиЦТ. Специализируется на 3D-проектировании и объёмных макетах помещений, планировках и чертежах, а также полном спектре графического дизайна, айдентики и веб-графики во всех направлениях.
              </p>

              <div className="pt-1 space-y-1">
                <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Ключевые направления:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">3D макеты & визуализация интерьеров</span>
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">Разработка чертежей и планировок</span>
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">Графический дизайн во всех сферах</span>
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">Фирменный стиль, брендинг и айдентика</span>
                  <span className="bg-white border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-2xs">Визуальные коммуникации и полиграфия</span>
                </div>
              </div>
            </div>

          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {ABOUT_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center space-y-1 hover:border-black transition-colors"
              >
                <div className="text-xl sm:text-2xl font-black text-black font-mono">{stat.value}</div>
                <div className="text-[10px] font-mono text-zinc-600 font-bold uppercase tracking-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-between items-center bg-zinc-900 text-white border border-zinc-800 p-4 rounded-xl">
            <div>
              <div className="font-mono font-bold text-white text-xs">// ХОТИТЕ ОБСУДИТЬ ПРОЕКТ С КОМАНДОЙ?</div>
              <div className="text-xs text-zinc-400">Расчет сметы, 3D макетов и архитектуры за 15 минут</div>
            </div>
            <button
              onClick={() => onOpenWindow('contacts')}
              className="bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>СВЯЗАТЬСЯ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Skills Tab Content */}
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


