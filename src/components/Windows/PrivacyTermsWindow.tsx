import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

interface PrivacyTermsProps {
  type: 'privacy' | 'terms';
}

export const PrivacyTermsWindow: React.FC<PrivacyTermsProps> = ({ type }) => {
  if (type === 'privacy') {
    return (
      <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
        <div className="flex items-center gap-2 text-black font-mono font-bold text-sm border-b border-zinc-200 pb-3">
          <ShieldCheck className="w-4 h-4 text-black" />
          <span>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</span>
        </div>
        
        <p>Настоящая Политика определяет порядок обработки и защиты персональных данных, передаваемых в VREYMA.STUDIO при заполнении формы брифа и запросе сметы.</p>

        <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[01] СБОР ДАННЫХ</h4>
        <p>Мы собираем только информацию, добровольно указанную вами в формах брифа (Имя, логин Telegram, Email, параметры и описание проекта).</p>

        <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[02] ИСПОЛЬЗОВАНИЕ ИНФОРМАЦИИ</h4>
        <p>Данные используются исключительно для подготовки коммерческого предложения, сметы и коммуникации по проекту. Мы никогда не передаем и не продаем данные третьим лицам.</p>

        <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[03] БЕЗОПАСНОСТЬ</h4>
        <p>Все каналы связи и обращения защищены. Мы принимаем необходимые организационные и технические меры для предотвращения несанкционированного доступа.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
      <div className="flex items-center gap-2 text-black font-mono font-bold text-sm border-b border-zinc-200 pb-3">
        <FileText className="w-4 h-4 text-black" />
        <span>УСЛОВИЯ ОБСЛУЖИВАНИЯ И СОГЛАШЕНИЕ</span>
      </div>

      <p>Добро пожаловать в VREYMA.STUDIO. Заказывая услуги по дизайну и веб-разработке, вы соглашаетесь со следующими условиями.</p>

      <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[01] ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ</h4>
      <p>После 100% оплаты проекта все права на созданный дизайн, уникальный код, 3D-графику и интерфейсы полностью переходят к заказчику.</p>

      <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[02] ГАРАНТИЯ И ПОДДЕРЖКА</h4>
      <p>На все разработанные проекты предоставляется 30 дней бесплатной гарантийной поддержки и исправления любых технических ошибок после запуска.</p>

      <h4 className="font-bold text-black font-mono uppercase text-xs pt-2">[03] ГРАФИК ОПЛАТЫ</h4>
      <p>Стандартные условия работы: 50% предоплата перед началом проектирования и 50% после утверждения готового проекта перед переносом на ваш домен.</p>
    </div>
  );
};

