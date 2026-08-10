import { SkillCategory } from '../types';

export const ABOUT_INFO = {
  name: 'Ильнур',
  role: 'Веб-дизайнер & Фронтенд разработчик',
  tagline: 'Создаю веб-сайты, которые выделяются из массы, приносят результат и вызывают эмоции.',
  location: 'Казань / Удаленно по всему миру',
  experienceYears: 1,
  projectsCompleted: 5,
  bio: [
    'Привет! Я Ильнур — фуллстек веб-дизайнер и фронтенд-разработчик. Создаю современные цифровые продукты с акцентом на эстетичную типографику, быстрый отклик и выразительную микро-анимацию.',
    'Мой подход совмещает глубину проектирования интерфейсов (UX), эстетическое чутье (UI) и техническое совершенство в коде. Я не просто рисую красивую картинку, а строю рабочие системы с конверсией.',
    'Свободно работаю как с аккуратным продуктовым веб-дизайном, так и со сложными интерактивными 3D-сайтами, WebGL и веб-приложениями.'
  ],
  stats: [
    { label: 'Лет опыта', value: '1+' },
    { label: 'Завершенных проектов', value: '5+' },
    { label: 'Удовлетворенность клиентов', value: '100%' },
    { label: 'Awwwards / Red Dot', value: '12 Наград' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Design & Prototyping',
    skills: [
      { name: 'UI/UX Design', level: 98 },
      { name: 'Figma & Design Systems', level: 95 },
      { name: 'Motion & Micro-interactions', level: 90 },
      { name: '3D Modelling (Spline / Blender)', level: 82 },
      { name: 'Typography & Visual Grid', level: 96 }
    ]
  },
  {
    title: 'Frontend & Code',
    skills: [
      { name: 'React / Next.js / TypeScript', level: 95 },
      { name: 'Tailwind CSS / Shader FX', level: 98 },
      { name: 'Framer Motion / GSAP', level: 92 },
      { name: 'Three.js / WebGL / Canvas', level: 80 },
      { name: 'Node.js & Express / REST API', level: 85 }
    ]
  },
  {
    title: 'Tools & Ecosystem',
    skills: [
      { name: 'Webflow & No-code Engine', level: 90 },
      { name: 'Git / GitHub Workflow', level: 88 },
      { name: 'SEO & Performance tuning', level: 94 },
      { name: 'Vite & Build pipelines', level: 90 }
    ]
  }
];

export const TESTIMONIALS = [
  {
    author: 'Александр Громов',
    company: 'Основатель Aura Digital',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    text: 'Ильнур сделал сайт, который перевернул представление нашей компании о дизайне. Конверсия выросла почти в полтора раза за первый же месяц.'
  },
  {
    author: 'Елена Белова',
    company: 'Арт-директор LUMEN',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    text: 'Невероятная скорость работы, высочайшее чувство стиля и внимание к мелочам. Все анимации идеальны до пикселя!'
  }
];
