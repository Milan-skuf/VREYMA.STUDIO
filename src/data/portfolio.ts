import { Project } from '../types';
import kaiiSweatshirt from '../assets/images/project_kaii_sweatshirt.png';
import kaiiSneakers from '../assets/images/project_kaii_sneakers.png';
import kaiiClip1 from '../assets/videos/project_kaii_clip1.mp4';
import kaiiClip2 from '../assets/videos/project_kaii_clip2.mp4';

export const PROJECTS: Project[] = [
  {
    id: 'project-kaii-long-sleeve',
    title: 'Project Kaii — Long Sleeve 3D Campaign',
    category: '3D & Motion',
    description: 'Полностью 3D-визуализация дизайнерского лонгслива и рекламный ролик для independent-бренда одежды Project Kaii.',
    longDescription: 'Digital-кампания для уникального дизайнерского бренда одежды Project Kaii: от 3D-пошива и симуляции ткани до финального AI-моушен ролика. Одежда смоделирована и разложена в Marvelous Designer, доведена до фотореалистичного рендера в Blender с текстурами Substance 3D, персонаж и поза выстроены в DAZ3D, а атмосферные видео-сцены анимированы через Runway AI.',
    image: kaiiSweatshirt,
    gallery: [kaiiSneakers],
    videos: [kaiiClip1, kaiiClip2],
    tags: ['Blender', 'Marvelous Designer', 'Substance 3D', 'DAZ3D', 'Runway AI'],
    year: '2025',
    client: 'Project Kaii',
    deliverables: ['3D-моделирование одежды', 'Симуляция и раскрой ткани', 'Текстурирование и рендер', 'AI-генерация видео-роликов'],
    isFeatured: true
  }
];
