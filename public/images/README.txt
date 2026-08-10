Папка для ваших файлов (изображений и видео)!

Вы можете загружать сюда ваши картинки и видеоролики напрямую через файловый менеджер проекта слева (в папку /public/images/):
Например:
- /public/images/avatar.jpg (для фотографии профиля)
- /public/images/project1.jpg (для скриншотов)
- /public/images/promo.mp4 (для видеороликов и 3D-анимаций)

Использовать их в файле /src/data/portfolio.ts или /src/data/about.ts можно следующим образом:

1. Картинка или видео карточки проекта:
   image: '/images/promo.mp4'  (автоматически воспроизводится видео с автоповтором!)
   или 
   video: '/images/promo.mp4'

2. В галерее проекта:
   gallery: [
     '/images/promo.mp4',
     '/images/shot1.jpg',
     '/images/shot2.jpg'
   ]
