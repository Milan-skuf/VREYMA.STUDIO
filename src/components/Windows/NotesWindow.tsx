import React, { useState } from 'react';
import { FileText, Save, Check } from 'lucide-react';

export const NotesWindow: React.FC = () => {
  const [noteText, setNoteText] = useState<string>(`// VREYMA.STUDIO — ИНЖЕНЕРНЫЕ ЗАМЕТКИ И МАНИФЕСТ СТУДИИ

1. МИНИМАЛИЗМ И ТИПОГРАФИКА: Чистая визуальная сетка, безупречный продуктовый UX и глубокая работа с шрифтами.
2. 3D ИНТЕРЬЕРЫ, ЧЕРТЕЖИ & ГРАФ. ДИЗАЙН: Объемные 3D макеты помещений, планировки и весь спектр графического дизайна.
3. 3D И ИИ ДЛЯ ФЭШН: Разработка 3D макетов одежды, 3D реклама и генеративный ИИ-контент для брендов.
4. TELEGRAM ECOSYSTEM: Нативные Telegram Mini Apps, Telegram-магазины с онлайн-оплатой и управляющие боты под ключ.
5. ПРОИЗВОДИТЕЛЬНОСТЬ: Мгновенный рендеринг, оптимизированные 3D-модели и чистая адаптивная верстка.

// ТЕКУЩИЙ ПЛАН РАЗВИТИЯ:
[x] Обновить концепт цифровой студии VREYMA.STUDIO
[x] Внедрить сервисы по 3D макетам одежды и Telegram Mini Apps
[ ] Добавить новые 3D-кейс демонстрации
[ ] Интегрировать ИИ-генератор лукбуков для брендов`);

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
          <span>заметки_разработчика.txt</span>
        </div>
        <button
          onClick={handleSave}
          className="bg-black hover:bg-zinc-800 text-white text-xs px-3 py-1.5 rounded-lg font-mono font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          {saved ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>СОХРАНЕНО</span>
            </>
          ) : (
            <>
              <Save className="w-3.5 h-3.5" />
              <span>СОХРАНИТЬ</span>
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

