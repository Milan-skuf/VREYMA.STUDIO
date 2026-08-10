import React, { useState } from 'react';
import { Send, Mail, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ABOUT_INFO } from '../../data/about';

export const ContactsWindow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Лендинг',
    budget: '100k - 200k ₽',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        contact: '',
        projectType: 'Лендинг',
        budget: '100k - 200k ₽',
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
            <span className="font-bold text-xs uppercase">// TELEGRAM (FASTEST)</span>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed font-normal">
            Direct communication channel. Typical response time: 15–30 mins.
          </p>
          <div className="flex items-center gap-2 pt-1 font-mono">
            <a
              href="https://t.me/ilnur_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black hover:bg-zinc-800 text-white font-bold text-xs py-2 px-3 rounded-xl transition-colors text-center flex items-center justify-center gap-1 shadow-sm"
            >
              <span>MESSAGE IN TELEGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => copyToClipboard('@ilnur_studio', 'telegram')}
              title="Copy username"
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
            <span className="font-bold text-xs uppercase">// EMAIL INQUIRIES</span>
          </div>
          <div className="text-xs font-black text-black">hello@ilnur.studio</div>
          <button
            onClick={() => copyToClipboard('hello@ilnur.studio', 'email')}
            className="w-full bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-800 font-bold text-xs py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-black" />
                <span className="text-black font-bold">COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </div>

        {/* Status & Time */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 space-y-2 text-xs font-mono">
          <div className="flex items-center gap-2 text-black font-bold">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>LOCATION: {ABOUT_INFO.location}</span>
          </div>
          <div className="text-zinc-500 text-[11px] font-medium">HOURS: MON — SAT / 09:00 - 20:00 MSK</div>
        </div>

      </div>

      {/* Right Column: Interactive Brief Form */}
      <div className="md:col-span-3 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="space-y-1 font-mono">
          <h3 className="text-sm font-bold text-black flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-black" />
            <span>// PROJECT BRIEF</span>
          </h3>
          <p className="text-xs text-zinc-600 font-sans">Fill in the key requirements for a rapid evaluation and estimate.</p>
        </div>

        {submitted ? (
          <div className="bg-black text-white border border-black rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300 font-mono">
            <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-sm uppercase">BRIEF SUBMITTED SUCCESSFULLY</h4>
            <p className="text-xs text-zinc-300 font-sans">Thank you! I will analyze your requirements and reach out shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">TELEGRAM / EMAIL *</label>
                <input
                  type="text"
                  required
                  placeholder="@username or mail@domain.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">PROJECT TYPE</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition-colors"
                >
                  <option value="Лендинг">Landing Page</option>
                  <option value="Многостраничник">Corporate / Multi-page</option>
                  <option value="Интернет-магазин">E-commerce Store</option>
                  <option value="Веб-приложение">Web Application / SaaS</option>
                  <option value="3D & Motion">3D / Interactive Experience</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-zinc-600 font-bold uppercase">BUDGET RANGE</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition-colors"
                >
                  <option value="50k - 100k ₽">50 000 — 100 000 ₽</option>
                  <option value="100k - 200k ₽">100 000 — 200 000 ₽</option>
                  <option value="200k - 350k ₽">200 000 — 350 000 ₽</option>
                  <option value="350k+ ₽">350 000+ ₽</option>
                </select>
              </div>
            </div>

            <div className="space-y-1 font-mono">
              <label className="text-[11px] text-zinc-600 font-bold uppercase">PROJECT DETAILS</label>
              <textarea
                rows={3}
                placeholder="Describe project goals, reference links, deadline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition-colors resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-zinc-800 text-white font-mono font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SUBMIT BRIEF</span>
            </button>
          </form>
        )}

      </div>

    </div>
  );
};

