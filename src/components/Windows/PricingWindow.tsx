import React, { useState } from 'react';
import { PRICING_TIERS, PROCESS_CATEGORIES, CALCULATOR_OPTIONS } from '../../data/pricing';
import { WindowId } from '../../types';
import { Check, Calculator, Clock, ArrowUpRight, ShieldCheck, Layers } from 'lucide-react';

interface PricingWindowProps {
  onOpenWindow: (id: WindowId) => void;
}

export const PricingWindow: React.FC<PricingWindowProps> = ({ onOpenWindow }) => {
  const [activeTab, setActiveTab] = useState<'tiers' | 'process' | 'calculator'>('tiers');
  const [selectedProcessCategory, setSelectedProcessCategory] = useState<string>('graphic_design');

  // Calculator State
  const [selectedType, setSelectedType] = useState<string>('interior3d');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['blueprints']);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');

  // Compute total
  const typeObj = CALCULATOR_OPTIONS.types.find(t => t.id === selectedType) || CALCULATOR_OPTIONS.types[0];
  const timelineObj = CALCULATOR_OPTIONS.timelines.find(t => t.id === selectedTimeline) || CALCULATOR_OPTIONS.timelines[0];

  const featuresPrice = selectedFeatures.reduce((sum, fId) => {
    const feat = CALCULATOR_OPTIONS.features.find(f => f.id === fId);
    return sum + (feat ? feat.price : 0);
  }, 0);

  const featuresDays = selectedFeatures.reduce((sum, fId) => {
    const feat = CALCULATOR_OPTIONS.features.find(f => f.id === fId);
    return sum + (feat ? feat.time : 0);
  }, 0);

  const rawPrice = typeObj.basePrice + featuresPrice;
  const totalPrice = Math.round(rawPrice * timelineObj.multiplier);
  const totalDays = Math.round((typeObj.time + featuresDays) / (timelineObj.multiplier === 1.4 ? 1.3 : 1));

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  return (
    <div className="space-y-6 font-sans text-zinc-900">
      
      {/* Sticky Navigation Tabs */}
      <div className="sticky top-0 bg-white z-10 pt-1 pb-3 border-b border-zinc-200 font-mono text-xs flex items-center gap-1 overflow-x-auto whitespace-nowrap custom-scrollbar flex-nowrap sm:flex-wrap">
        <button
          onClick={() => setActiveTab('tiers')}
          className={`pb-2.5 sm:pb-3 px-3 sm:px-4 border-b-2 transition-colors cursor-pointer flex-shrink-0 ${
            activeTab === 'tiers'
              ? 'border-black text-black font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          [01] ТАРИФЫ И УСЛУГИ
        </button>
        <button
          onClick={() => setActiveTab('calculator')}
          className={`pb-2.5 sm:pb-3 px-3 sm:px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 flex-shrink-0 ${
            activeTab === 'calculator'
              ? 'border-black text-black font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          <Calculator className="w-3.5 h-3.5 text-black" />
          <span>[02] КАЛЬКУЛЯТОР</span>
        </button>
        <button
          onClick={() => setActiveTab('process')}
          className={`pb-2.5 sm:pb-3 px-3 sm:px-4 border-b-2 transition-colors cursor-pointer flex-shrink-0 ${
            activeTab === 'process'
              ? 'border-black text-black font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          [03] ЭТАПЫ РАБОТЫ
        </button>
      </div>

      {/* Tiers Tab */}
      {activeTab === 'tiers' && (
        <div className="space-y-6 font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white border rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-black ${
                  tier.popular
                    ? 'border-black shadow-xl shadow-black/5'
                    : 'border-zinc-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white font-bold text-[10px] uppercase font-mono px-3 py-0.5 rounded-full shadow-lg">
                    РЕКОМЕНДУЕМ
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-black font-mono">{tier.name}</h3>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed font-normal">{tier.tagline}</p>
                  </div>

                  <div className="py-2 border-y border-zinc-200 font-mono">
                    <div className="text-2xl font-black text-black">{tier.priceFrom}</div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-zinc-700" />
                      <span>Срок: {tier.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-black uppercase tracking-widest font-mono">// ВХОДИТ В СТОИМОСТЬ:</div>
                    <ul className="space-y-2 text-xs text-zinc-700">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-black flex-shrink-0 mt-0.5 font-bold" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenWindow('contacts')}
                    className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      tier.popular
                        ? 'bg-black hover:bg-zinc-800 text-white'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200'
                    }`}
                  >
                    ВЫБРАТЬ ТАРИФ
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Guarantee banner */}
          <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex items-center gap-3 text-xs text-zinc-700">
            <ShieldCheck className="w-5 h-5 text-black flex-shrink-0" />
            <div className="font-sans">
              <span className="font-mono font-bold text-black uppercase">ГАРАНТИЯ:</span> Все этапы и сметы фиксируются в договоре. Оплата 50% предоплата / 50% после запуска.
            </div>
          </div>
        </div>
      )}

      {/* Interactive Calculator Tab */}
      {activeTab === 'calculator' && (
        <div className="space-y-6">
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sm:p-6 space-y-6">
            
            {/* Step 1: Type */}
            <div className="space-y-3 font-mono">
              <label className="text-xs font-bold text-black uppercase tracking-widest">
                [01] ВЫБЕРИТЕ ТИП ПРОЕКТА:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CALCULATOR_OPTIONS.types.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedType(t.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex justify-between items-center ${
                      selectedType === t.id
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-white border-zinc-200 text-zinc-700 hover:border-black'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs sm:text-sm">{t.label}</div>
                      <div className={`text-[11px] font-mono mt-0.5 ${selectedType === t.id ? 'text-zinc-300' : 'text-zinc-500'}`}>от {t.basePrice.toLocaleString()} ₽</div>
                    </div>
                    {selectedType === t.id && <Check className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features */}
            <div className="space-y-3 font-mono">
              <label className="text-xs font-bold text-black uppercase tracking-widest">
                [02] ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CALCULATOR_OPTIONS.features.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex justify-between items-center ${
                        isChecked
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white border-zinc-200 text-zinc-700 hover:border-black'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-xs sm:text-sm">{f.label}</div>
                        <div className={`text-[11px] font-mono mt-0.5 ${isChecked ? 'text-zinc-300' : 'text-zinc-500'}`}>+{f.price.toLocaleString()} ₽</div>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-white text-black border-white' : 'border-zinc-300'}`}>
                        {isChecked && <Check className="w-3 h-3 font-bold" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Speed */}
            <div className="space-y-3 font-mono">
              <label className="text-xs font-bold text-black uppercase tracking-widest">
                [03] СРОКИ И СКОРОСТЬ:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CALCULATOR_OPTIONS.timelines.map((tl) => (
                  <button
                    key={tl.id}
                    onClick={() => setSelectedTimeline(tl.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex justify-between items-center ${
                      selectedTimeline === tl.id
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-white border-zinc-200 text-zinc-700 hover:border-black'
                    }`}
                  >
                    <span className="font-medium text-xs sm:text-sm">{tl.label}</span>
                    {selectedTimeline === tl.id && <Check className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Total Result Summary */}
            <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
              <div className="space-y-1 text-center sm:text-left font-mono">
                <div className="text-xs text-zinc-500 font-bold">РАСЧЕТНАЯ СМЕТА:</div>
                <div className="text-2xl sm:text-3xl font-black text-black">
                  ~ {totalPrice.toLocaleString()} ₽
                </div>
                <div className="text-xs text-zinc-600 flex items-center justify-center sm:justify-start gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  <span>Срок: ~{totalDays} рабочих дней</span>
                </div>
              </div>

              <button
                onClick={() => onOpenWindow('contacts')}
                className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white font-mono font-bold text-xs px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>ОТПРАВИТЬ СМЕТУ</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Process Tab */}
      {activeTab === 'process' && (
        <div className="space-y-5">
          {/* Discipline Selector */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-100 rounded-xl border border-zinc-200">
            {PROCESS_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedProcessCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedProcessCategory === cat.id
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-200/60'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{cat.categoryTitle}</span>
              </button>
            ))}
          </div>

          {/* Current Category Banner */}
          {(() => {
            const currentCat = PROCESS_CATEGORIES.find(c => c.id === selectedProcessCategory) || PROCESS_CATEGORIES[0];
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                  <h3 className="font-extrabold text-black font-sans text-lg">{currentCat.categoryTitle}</h3>
                  <span className="text-[10px] font-mono font-bold bg-zinc-900 text-white px-2.5 py-0.5 rounded-full">
                    {currentCat.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCat.steps.map((step) => (
                    <div
                      key={step.step}
                      className="bg-white border border-zinc-200 rounded-xl p-5 space-y-3 hover:border-black transition-colors shadow-sm"
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-2xl font-black text-black">{step.step}</span>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">ЭТАП</span>
                      </div>
                      <h3 className="font-bold text-base text-black font-sans">{step.title}</h3>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">{step.description}</p>
                      <div className="pt-2 border-t border-zinc-100 space-y-1 font-mono">
                        <div className="text-[10px] text-zinc-500 font-bold uppercase">РЕЗУЛЬТАТЫ:</div>
                        <div className="flex flex-wrap gap-1">
                          {step.deliverables.map((d, idx) => (
                            <span key={idx} className="text-[10px] bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded border border-zinc-200 font-medium">
                              • {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

    </div>
  );
};

