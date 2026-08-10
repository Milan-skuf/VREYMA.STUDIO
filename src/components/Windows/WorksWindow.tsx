import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolio';
import { Project, WindowId } from '../../types';
import { Sparkles, ArrowUpRight, X, CheckCircle2, PlayCircle } from 'lucide-react';

interface WorksWindowProps {
  onOpenWindow: (id: WindowId) => void;
}

export const WorksWindow: React.FC<WorksWindowProps> = ({ onOpenWindow }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', '3D & Motion', 'E-commerce', 'Web App', 'Landing', 'Branding'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-6 font-sans text-zinc-900">
      
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-50 p-3 rounded-2xl border border-zinc-200 font-mono text-xs">
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
          TOTAL: <span className="text-black font-extrabold">{filteredProjects.length}</span> PROJECTS
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group relative bg-white border border-zinc-200 hover:border-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 cursor-pointer flex flex-col"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden bg-zinc-100">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              {project.videos && project.videos.length > 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white/90 drop-shadow-lg" />
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-black">
                {project.category}
              </div>

              {project.isFeatured && (
                <div className="absolute top-3 right-3 bg-white text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 border border-zinc-200">
                  <Sparkles className="w-3 h-3 text-black" />
                  <span>FEATURED</span>
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
        ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-3 bg-zinc-50 border border-dashed border-zinc-300 rounded-2xl py-16 px-6">
          <Sparkles className="w-8 h-8 text-zinc-400" />
          <h3 className="font-mono font-bold text-sm text-black uppercase tracking-widest">Скоро здесь появятся работы</h3>
          <p className="text-xs text-zinc-500 max-w-sm font-normal">Раздел портфолио обновляется — совсем скоро тут будут новые проекты.</p>
        </div>
      )}

      {/* Detail Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-zinc-200 text-zinc-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 rounded-full text-zinc-700 hover:text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Media */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200 bg-black">
              {activeProject.videos && activeProject.videos.length > 0 ? (
                <video
                  key={activeProject.videos[0]}
                  src={activeProject.videos[0]}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Extra gallery: additional images + videos */}
            {((activeProject.gallery && activeProject.gallery.length > 0) ||
              (activeProject.videos && activeProject.videos.length > 1)) && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeProject.gallery?.map((img, idx) => (
                  <div key={`img-${idx}`} className="aspect-square rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
                    <img
                      src={img}
                      alt={`${activeProject.title} ${idx + 2}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {activeProject.videos?.slice(1).map((vid, idx) => (
                  <div key={`vid-${idx}`} className="aspect-square rounded-xl overflow-hidden border border-zinc-200 bg-black">
                    <video
                      src={vid}
                      controls
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Modal Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono">
                <span className="bg-black text-white text-xs px-3 py-1 rounded-lg font-bold">
                  {activeProject.category}
                </span>
                <span className="text-xs text-zinc-500 font-bold">CLIENT: {activeProject.client}</span>
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
              <h4 className="text-xs font-bold text-black uppercase tracking-widest">// SCOPE & DELIVERABLES:</h4>
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
                <span className="text-xs text-zinc-500">TECH:</span>
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
                  <span>REQUEST SIMILAR</span>
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

