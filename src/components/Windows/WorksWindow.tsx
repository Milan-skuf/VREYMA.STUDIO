import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolio';
import { Project, WindowId } from '../../types';
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Video,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const formatMediaUrl = (url?: string): string => {
  if (!url) return '';
  let clean = url.trim().replace(/^\\+/, '').replace(/\\/g, '/');
  if (clean.startsWith('public/')) {
    clean = '/' + clean.substring(7);
  }
  return clean;
};

const isVideoUrl = (url?: string): boolean => {
  if (!url) return false;
  const clean = formatMediaUrl(url).toLowerCase();
  return (
    clean.endsWith('.mp4') ||
    clean.endsWith('.webm') ||
    clean.endsWith('.mov') ||
    clean.endsWith('.m4v') ||
    clean.endsWith('.ogg') ||
    clean.includes('video') ||
    clean.includes('.mp4?') ||
    clean.includes('.webm?')
  );
};

interface WorksWindowProps {
  onOpenWindow: (id: WindowId) => void;
}

export const WorksWindow: React.FC<WorksWindowProps> = ({ onOpenWindow }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories = ['Все', '3D & Motion', 'Telegram Mini App', 'Веб-приложение', 'Лендинг'];

  const filteredProjects = selectedCategory === 'Все'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    const firstMedia = formatMediaUrl(project.video || project.image);
    setActiveImage(firstMedia);
  };

  // Gallery list for active project
  const getProjectGallery = (project: Project): string[] => {
    const list = [project.video, project.image, ...(project.gallery || [])]
      .filter(Boolean)
      .map((url) => formatMediaUrl(url));
    // Unique list
    return Array.from(new Set(list));
  };

  const currentGallery = activeProject ? getProjectGallery(activeProject) : [];

  const handlePrevPreviewMedia = () => {
    if (currentGallery.length <= 1) return;
    const currentFormatted = formatMediaUrl(activeImage || activeProject?.video || activeProject?.image);
    const currentIdx = currentGallery.indexOf(currentFormatted);
    const prevIdx = currentIdx <= 0 ? currentGallery.length - 1 : currentIdx - 1;
    setActiveImage(currentGallery[prevIdx]);
  };

  const handleNextPreviewMedia = () => {
    if (currentGallery.length <= 1) return;
    const currentFormatted = formatMediaUrl(activeImage || activeProject?.video || activeProject?.image);
    const currentIdx = currentGallery.indexOf(currentFormatted);
    const nextIdx = (currentIdx + 1) % currentGallery.length;
    setActiveImage(currentGallery[nextIdx]);
  };

  return (
    <div className="space-y-6 font-sans text-zinc-900 select-text">
      
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-50 p-3 rounded-2xl border border-zinc-200 font-mono text-xs select-none">
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer uppercase ${
                selectedCategory === cat
                  ? 'bg-black text-white font-extrabold shadow-sm'
                  : 'bg-white text-zinc-700 hover:text-black hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>

        <div className="text-zinc-500 font-mono hidden sm:block">
          ВСЕГО: <span className="text-black font-extrabold">{filteredProjects.length}</span> ПРОЕКТОВ
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => {
          const mainMedia = formatMediaUrl(project.video || project.image);
          const isVid = isVideoUrl(mainMedia);

          return (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group relative bg-white border border-zinc-200 hover:border-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 cursor-pointer flex flex-col"
            >
              {/* Project Image / Video */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                {isVid ? (
                  <video
                    src={mainMedia}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={mainMedia}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-black flex items-center gap-1.5">
                  {isVid && <Video className="w-3 h-3 text-amber-400" />}
                  <span>{project.category}</span>
                </div>

                {project.isFeatured && (
                  <div className="absolute top-3 right-3 bg-white text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 border border-zinc-200">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span>ИЗБРАННЫЙ</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-extrabold text-base text-black group-hover:underline transition-all">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 font-bold">{project.year}</span>
                  </div>
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 font-mono">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white border border-zinc-200 text-zinc-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 pt-10 sm:pt-12 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            
            <div className="absolute top-4 left-5 flex items-center gap-2 z-10">
              <button
                onClick={() => setActiveProject(null)}
                className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors cursor-pointer"
                title="Закрыть проект"
              />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
            </div>

            {/* Modal Media Showcase */}
            <div className="space-y-3">
              {/* Active Image / Video Viewport */}
              <div className="relative group/view rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-950 flex items-center justify-center min-h-[260px] max-h-[550px]">
                {isVideoUrl(activeImage || activeProject.video || activeProject.image) ? (
                  <video
                    key={activeImage || activeProject.video || activeProject.image}
                    src={formatMediaUrl(activeImage || activeProject.video || activeProject.image)}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full max-h-[500px] object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement;
                      if (!target.dataset.fallbackTried) {
                        target.dataset.fallbackTried = 'true';
                        target.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
                        target.load();
                      }
                    }}
                  />
                ) : (
                  <img
                    src={formatMediaUrl(activeImage || activeProject.image)}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
                    }}
                    className="w-full h-full max-h-[500px] object-contain"
                  />
                )}

                {/* Left and Right Navigation Arrows for Preview Viewport */}
                {currentGallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevPreviewMedia();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/70 hover:bg-black text-white rounded-full border border-white/20 hover:scale-110 shadow-xl cursor-pointer transition-all z-20 backdrop-blur-md"
                      title="Предыдущее фото"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextPreviewMedia();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/70 hover:bg-black text-white rounded-full border border-white/20 hover:scale-110 shadow-xl cursor-pointer transition-all z-20 backdrop-blur-md"
                      title="Следующее фото"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Gallery Thumbnails Carousel */}
              {currentGallery.length > 0 && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 px-1">
                    <span>ГАЛЕРЕЯ ПРОЕКТА ({currentGallery.length}):</span>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar pt-1">
                    {currentGallery.map((mediaUrl, idx) => {
                      const formattedUrl = formatMediaUrl(mediaUrl);
                      const isVid = isVideoUrl(formattedUrl);
                      const isSelected = formatMediaUrl(activeImage) === formattedUrl;

                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(mediaUrl)}
                          className={`relative flex-shrink-0 w-24 h-20 sm:w-28 sm:h-22 rounded-xl overflow-hidden border-2 cursor-pointer transition-all bg-zinc-900 group ${
                            isSelected
                              ? 'border-black opacity-100 ring-2 ring-black/20 shadow-md'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          {isVid ? (
                            <>
                              <video
                                src={formattedUrl}
                                muted
                                playsInline
                                className="w-full h-full object-cover pointer-events-none"
                                onError={(e) => {
                                  const target = e.target as HTMLVideoElement;
                                  if (!target.dataset.fallbackTried) {
                                    target.dataset.fallbackTried = 'true';
                                    target.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
                                    target.load();
                                  }
                                }}
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Play className="w-5 h-5 text-white fill-white" />
                              </div>
                            </>
                          ) : (
                            <img
                              src={formattedUrl}
                              alt={`Галерея ${idx + 1}`}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
                              }}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          )}

                          <div className="absolute top-1 left-1 bg-black/60 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                            0{idx + 1}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono">
                <span className="bg-black text-white text-xs px-3 py-1 rounded-lg font-bold">
                  {activeProject.category}
                </span>
                <span className="text-xs text-zinc-500 font-bold">КЛИЕНТ: {activeProject.client}</span>
              </div>
              <h2 className="text-2xl font-black text-black">{activeProject.title}</h2>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">{activeProject.longDescription}</p>
            </div>

            {/* Stats if available */}
            {activeProject.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-zinc-50 p-4 rounded-2xl border border-zinc-200 font-mono">
                {activeProject.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-lg font-bold text-black">{stat.value}</div>
                    <div className="text-[11px] text-zinc-500 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Deliverables */}
            <div className="space-y-3 font-mono">
              <h4 className="text-xs font-bold text-black uppercase tracking-widest">// ОБЪЕМ И РЕЗУЛЬТАТЫ:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProject.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-xs text-zinc-500">СТЕК:</span>
                <div className="flex flex-wrap gap-1">
                  {activeProject.tags.map(t => (
                    <span key={t} className="text-[10px] bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded border border-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveProject(null);
                    onOpenWindow('contacts');
                  }}
                  className="flex-1 sm:flex-none bg-black text-white font-mono font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>ЗАКАЗАТЬ ПОДОБНЫЙ</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};


