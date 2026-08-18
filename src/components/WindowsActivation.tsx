import React, { useState } from 'react';
import { Key, CheckCircle, Sparkles, X } from 'lucide-react';

export const WindowsActivation: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activated, setActivated] = useState(false);

  const keyString = 'VREYMA-STUDIO-DESIGN-2025-PRO';

  return (
    <>
      {/* Bottom Right Watermark (Responsive position above dock bar on mobile) */}
      <div 
        onClick={() => setShowModal(true)}
        className="fixed bottom-20 sm:bottom-16 right-4 sm:right-6 z-30 select-none text-right text-white/40 hover:text-white/80 transition-colors cursor-pointer group pointer-events-auto"
        title="Нажмите для активации Windows"
      >
        <div className="text-xs sm:text-sm font-sans tracking-wide">Активация Windows</div>
        <div className="text-[10px] sm:text-[11px] font-sans leading-tight">
          Чтобы активировать Windows, перейдите в<br />раздел &quot;Параметры&quot;.
        </div>
      </div>

      {/* Activation Easter Egg Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-white/20 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl relative text-white animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base font-mono">Активация системы VREYMA.STUDIO</h3>
                <p className="text-xs text-zinc-400">Параметры ОС студии</p>
              </div>
            </div>

            {activated ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="font-bold text-sm text-emerald-300">Windows успешно активирована!</div>
                <p className="text-xs text-zinc-300">Ключ разработчика действителен навсегда. Хорошей работы!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Поздравляем, вы нашли пасхалку из скриншота! Вы можете бесплатно активировать лицензионный ключ разработчика VREYMA.STUDIO ниже:
                </p>

                <div className="bg-zinc-900 border border-white/10 p-3 rounded-xl font-mono text-center text-xs text-pink-400 font-bold select-all tracking-widest">
                  {keyString}
                </div>

                <button
                  onClick={() => setActivated(true)}
                  className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Активировать прямо сейчас</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
