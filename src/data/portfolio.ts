import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'cyber-synth',
    title: 'project kaii — 3D Макеты одежды & 3D Реклама',
    category: '3D & Motion',
    description: 'Разработка 3D макетов одежды, 3D рекламы и интерактивного 3D-шоурума для фэшн-бренда.',
    longDescription: 'Полный цикл 3D макетирования ткани, создание промо-роликов и 3D рекламного контента для презентации новой коллекции одежды с интерактивным просмотром 360°.',
    image: '/images/5e4270f7-2649-48aa-8fd2-838908a98c46.jpg',
    tags: ['BLENDER', 'MARVELOUS DESIGNER', 'SUBSTANCE 3D', 'DAZ3D', 'RUNWAY AI'],
    year: '2025',
    client: 'project kaii',
    link: 'https://t.me/projectkaii',
    
    deliverables: ['3D макеты одежды', '3D промо-ролик', 'Интерактивный 3D-просмотр', 'ИИ-генерация лукбука'],
    isFeatured: true,
    gallery: [
      '/images/5e4270f7-2649-48aa-8fd2-838908a98c46.jpg',
      '/images/photo_2025-12-28_22-25-03.jpg',
      '/images/photo_2025-12-25_19-10-18.jpg'
    ]
  },
  
  {
    id: 'ai-saas-platform',
    title: 'Григокон — Минималистичный премиум-сайт & UX',
    category: 'Веб-приложение',
    description: 'Минималистичный сайт с безупречной типографикой и продуманным продуктовым UX.',
    longDescription: 'Проектирование и разработка веб-платформы с премиальной сеткой типографики, тонкую микро-анимацию и мгновенный отклик интерактивных элементов.',
    image: '/images/4_w08Dck-rPpMg_ngW0w0S-4-uHNjqNKfPvSpw5OC5XTGJ40K89CStJK3EfyCzVx67pWaIYvm-5kH4tXQDG3S4xe.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: '2026',
    client: 'Григокон',
    link: 'https://t.me/grigokon1',
    
    deliverables: ['Премиум UI/UX', 'Типографика и сетка', 'Адаптивный фронтенд', 'Анимация взаимодействия'],
    isFeatured: true,
    gallery: [
      '/images/4_w08Dck-rPpMg_ngW0w0S-4-uHNjqNKfPvSpw5OC5XTGJ40K89CStJK3EfyCzVx67pWaIYvm-5kH4tXQDG3S4xe.jpg',
      '/images/photo_2026-07-28_07-23-54.jpg',
      '/images/photo_2026-07-28_07-23-55.jpg',
      '/images/photo_2026-07-28_07-23-58.jpg'
    ]
  },
  {
    id: 'C&W',
    title: 'C&W — ИИ контент & 3D Визуализация',
    category: '3D & Motion',
    description: 'Генерация ИИ контента и 3D визуализация линейки  одежды для нститут экономики и менеджмента (ИЭМ) Томского государственного университета (ТГУ) бренда.',
    longDescription: 'Создание серии визуальных рекламных материалов с ИИ-генерацией и 3D моделированием ткани для рекламных кампаний в социальных сетях.',
    image: '/images/04d6827e-1fd4-446a-bdae-acf403071002.jpg',
    tags: ['BLENDER', 'MARVELOUS DESIGNER', 'SUBSTANCE 3D', 'DAZ3D', 'RUNWAY AI'],
    year: '2025',
    client: 'ТГУ',
    deliverables: ['3D рендеры одежды', 'ИИ-луки для каталога', 'Рекламные видеоролики'],
    isFeatured: false,
    gallery: [
      '/public/images/photo_2026-08-06_20-22-05.jpg',
      '/public/images/photo_2025-11-24_16-10-54.jpg',
      '/public/images/photo_2025-11-24_22-42-22.jpg',
      'public/images/photo_2026-08-06_20-22-37.jpg'
    ]
  },
  {
    id: 'jonny-brado-barbershop',
    title: 'JONNY BRADO — Веб-сайт + Приложение для записи в барбершоп',
    category: 'Telegram Mini App',
    description: 'Веб-сайт + Telegram Mini App для удобной онлайн-записи клиентов, выбора мастеров и услуг барбершопа JONNY BRADO.',
    longDescription: 'Разработка веб-сайта и приложения под ключ для барбершопа JONNY BRADO: интерактивный выбор мастера, даты и времени, каталог услуг и автоматические напоминания.',
    image: 'public/images/джони брадо (4).jpg',
    tags: ['Веб-сайт + Приложение', 'Telegram Mini App', 'React', 'Node.js', 'Online Booking'],
    year: '2026',
    client: 'JONNY BRADO',
    stats: [
      { label: 'Записи клиентов', value: '100%' }
    ],
    deliverables: ['Веб-сайт + Приложение', 'Онлайн-запись', 'Интеграция CRM', 'Уведомления'],
    isFeatured: false,
    gallery: [
      'public/images/джони брадо (1).jpg',
      'public/images/джони брадо (2).jpg',
      'public/images/джони брадо (3).jpg',
      'public/images/джони брадо (5).jpg'
    ]
  }
  
];
