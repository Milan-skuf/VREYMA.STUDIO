import React from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';

export const TrashWindow: React.FC = () => {
  const deletedItems = [
    { title: 'draft_v1_bad_typography.fig', size: '142 МБ', reason: 'Отклонено: Излишний визуальный шум и плохая читаемость' },
    { title: 'impossible_2day_marketplace.zip', size: '2.1 ГБ', reason: 'Нереалистичный дедлайн 48 часов без детального ТЗ' },
    { title: 'generic_saas_template_2018.png', size: '18 МБ', reason: 'Устаревший шаблон заменен на лаконичный светлый сетчатый дизайн' },
    { title: 'ai_will_replace_engineers.txt', size: '1 КБ', reason: 'Удалено: ИИ — лишь инструмент, а мастерство требует человеческого видения' },
  ];

  return (
    <div className="space-y-4 font-mono text-zinc-900">
      <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl flex items-center justify-between text-xs text-black font-bold">
        <div className="flex items-center gap-2">
          <Trash2 className="w-4 h-4 text-black" />
          <span>КОРЗИНА СТУДИИ: {deletedItems.length} АРХИВНЫХ ЧЕРНОВИКА</span>
        </div>
        <span className="text-[10px] bg-white text-zinc-700 px-2 py-0.5 rounded border border-zinc-200">АРХИВ</span>
      </div>

      <div className="space-y-2">
        {deletedItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 flex justify-between items-start text-xs space-y-1"
          >
            <div>
              <div className="font-bold text-black flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-black" />
                <span>{item.title}</span>
              </div>
              <div className="text-[11px] text-zinc-600 font-sans mt-0.5 font-normal">Причина: {item.reason}</div>
            </div>
            <span className="text-[10px] text-zinc-400 font-bold">{item.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

