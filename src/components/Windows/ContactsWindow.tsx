import React, { useState } from 'react';
import { Send, Mail, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ABOUT_INFO } from '../../data/about';

export const ContactsWindow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Минималистичный сайт',
    budget: '5 000 — 15 000 ₽',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = encodeURIComponent(
      `👋 Новый бриф с VREYMA.STUDIO!\n\n` +
      `👤 Имя: ${formData.name}\n` +
      `💬 Контакт: ${formData.contact}\n` +
      `📌 Тип проекта: ${formData.projectType}\n` +
      `💰 Бюджет: ${formData.budget}` +
      (formData.message ? `\n📝 Детали: ${formData.message}` : '')
    );

    // Open Telegram with pre-filled message directly to @Djambovic
    window.open(`https://t.me/Djambovic?text=${messageText}`, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        contact: '',
        projectType: 'Минималистичный сайт',
        budget: '5 000 — 15 000 ₽',
        message: ''
      });
    }, 4000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'telegram') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedTelegram(true);
      setTimeout(() => setCopiedTelegram(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 font-sans text-zinc-900">
      
      {/* Left Column: Direct Links & Info */}
      <div className="md:col-span-2 space-y-4">
        
        {/* Telegram Priority Card */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3 hover:border-black transition-colors">
          <div className="flex items-center gap-2 text-black font-mono">
            <Send className="w-4 h-4" />
            <span className="font-bold text-xs uppercase">// TELEGRAM (БЫСТРЫЙ ОТВЕТ)</span>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed font-normal">
            Прямой канал связи. Среднее время ответа: 15–30 минут.
          </p>
          <div className="flex items-center gap-2 pt-1 font-mono">
            <a
              href="https://t.me/Djambovic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black hover:bg-zinc-800 text-white font-bold text-xs py-2 px-3 rounded-xl transition-colors text-center flex items-center justify-center gap-1 shadow-sm"
            >
              <span>НАПИСАТЬ В TELEGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => copyToClipboard('@Djambovic', 'telegram')}
              title="Скопировать логин"
              className="p-2 bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 rounded-xl transition-colors cursor-pointer"
            >
              {copiedTelegram ? <Check className="w-4 h-4 text-black font-bold" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3 font-mono">
          <div className="flex items-center gap-2 text-black">
            <Mail className="w-4 h-4" />
            <span className="font-bold text-xs uppercase">// ЭЛЕКТРОННАЯ ПОЧТА</span>
          </div>
          <div className="text-xs font-black text-black">kigdelta@mail.ru</div>
          <button
            onClick={() => copyToClipboard('kigdelta@mail.ru', 'email')}
            className="w-full bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-800 font-bold text-xs py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-black" />
                <span className="text-black font-bold">СКОПИРОВАНО В БУФЕР</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>СКОПИРОВАТЬ EMAIL</span>
              </>
            )}
          </button>
        </div>

        {/* Status & Time */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 space-y-2 text-xs font-mono">
          <div className="flex items-center gap-2 text-black font-bold">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>ЛОКАЦИЯ: {ABOUT_INFO.location}</span>
          </div>
          <div className="text-zinc-500 text-[11px] font-medium">ЧАСЫ РАБОТЫ: ПН — СБ / 09:00 - 20:00 МСК</div>
        </div>

      </div>

      {/* Right Column: Interactive Brief Form */}
      <div className="md:col-span-3 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="space-y-1 font-mono">
          <h3 className="text-sm font-bold text-black flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-black" />
            <span>// ЭКСПРЕСС-БРИФ ПРОЕКТА</span>
          </h3>
          <p className="text-xs text-zinc-600 font-sans">Заполните ключевые параметры для быстрой оценки сметы и сроков.</p>
        </div>

        {submitted ? (
          <div className="bg-black text-white border border-black rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300 font-mono">
            <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sm uppercase">БРИФ УСПЕШНО ОТПРАВЛЕН</h4>
            <p className="text-xs text-zinc-300 font-sans">Спасибо! Я изучу ваши требования и свяжусь с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">ВАШЕ ИМЯ *</label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2.5 sm:py-2 text-[16px] sm:text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">TELEGRAM / EMAIL *</label>
                <input
                  type="text"
                  required
                  placeholder="@username или mail@domain.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2.5 sm:py-2 text-[16px] sm:text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">ТИП ПРОЕКТА</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2.5 sm:py-2 text-[16px] sm:text-xs text-black focus:outline-none focus:border-black transition-colors cursor-pointer"
                >
                  <option value="Минималистичный сайт">Минималистичный премиум-сайт</option>
                  <option value="3D Макеты одежды">3D макеты / 3D реклама одежды</option>
                  <option value="Telegram Mini App">Telegram Mini App / Магазин pod key</option>
                  <option value="ИИ контент для бренда">ИИ контент для бренда одежды</option>
                  <option value="3D & Веб-приложение">Интерактивный 3D-интерфейс</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">БЮДЖЕТ ПРОЕКТА</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2.5 sm:py-2 text-[16px] sm:text-xs text-black focus:outline-none focus:border-black transition-colors cursor-pointer"
                >
                  <option value="1 000 — 5 000 ₽">1 000 — 5 000 ₽</option>
                  <option value="5 000 — 15 000 ₽">5 000 — 15 000 ₽</option>
                  <option value="15 000 — 30 000 ₽">15 000 — 30 000 ₽</option>
                  <option value="30 000 ₽+">30 000 ₽+</option>
                </select>
              </div>
            </div>

            <div className="space-y-1 font-mono">
              <label className="text-[11px] text-zinc-600 font-bold uppercase">ДЕТАЛИ И ЗАДАЧИ ПРОЕКТА</label>
              <textarea
                rows={3}
                placeholder="Опишите цели проекта, референсы, желаемые сроки..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2.5 sm:py-2 text-[16px] sm:text-xs text-black focus:outline-none focus:border-black transition-colors resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-zinc-800 text-white font-mono font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>ОТПРАВИТЬ БРИФ</span>
            </button>
          </form>
        )}

      </div>

    </div>
  );
};

