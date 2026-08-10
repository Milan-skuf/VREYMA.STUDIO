import React, { useState } from 'react';
import { WindowId, WindowState } from './types';
import { TopNavbar } from './components/TopNavbar';
import { HeroCard } from './components/HeroCard';
import { DesktopFolder } from './components/DesktopFolder';
import { DockBar } from './components/DockBar';
import { WindowWrapper } from './components/Windows/WindowWrapper';
import { AboutWindow } from './components/Windows/AboutWindow';
import { WorksWindow } from './components/Windows/WorksWindow';
import { PricingWindow } from './components/Windows/PricingWindow';
import { ContactsWindow } from './components/Windows/ContactsWindow';
import { NotesWindow } from './components/Windows/NotesWindow';
import { MusicPlayerWindow } from './components/Windows/MusicPlayerWindow';
import { PrivacyTermsWindow } from './components/Windows/PrivacyTermsWindow';
import { TrashWindow } from './components/Windows/TrashWindow';
import { WindowsActivation } from './components/WindowsActivation';

import bgImage from './assets/images/studio_background_1785779557640.jpg';

export default function App() {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>({
    about: { id: 'about', title: 'ОБО МНЕ — Профиль и навыки.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    works: { id: 'works', title: 'РАБОТЫ — Портфолио проектов.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    pricing: { id: 'pricing', title: 'ПРОЦЕСС И ЦЕНЫ — Калькулятор сметы.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    contacts: { id: 'contacts', title: 'КОНТАКТЫ — Экспресс-бриф и связь.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    notes: { id: 'notes', title: 'Заметки студии.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    music: { id: 'music', title: 'Lo-Fi Музыкальный плеер.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    trash: { id: 'trash', title: 'Корзина (Черновики).app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    privacy: { id: 'privacy', title: 'Privacy Policy.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    terms: { id: 'terms', title: 'Terms of Service.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } },
    activation: { id: 'activation', title: 'Активация Windows.app', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10, position: { x: 0, y: 0 } }
  });

  const [highestZ, setHighestZ] = useState<number>(20);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const openWindow = (id: WindowId) => {
    const nextZ = highestZ + 1;
    setHighestZ(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: nextZ,
      },
    }));
  };

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
      },
    }));
  };

  const minimizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));
  };

  const maximizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
      },
    }));
  };

  const focusWindow = (id: WindowId) => {
    const nextZ = highestZ + 1;
    setHighestZ(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        zIndex: nextZ,
      },
    }));
  };

  const activeWindowIds = (Object.keys(windows) as WindowId[]).filter(
    (key) => windows[key].isOpen && !windows[key].isMinimized
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none bg-white font-sans text-zinc-900">
      
      {/* Light Grid Background & Collage */}
      <div className="absolute inset-0 z-0 bg-white bg-xsai-grid-light">
        <div className="absolute inset-y-0 right-0 w-full sm:w-2/3 lg:w-1/2 overflow-hidden pointer-events-none flex items-center justify-end pr-4 sm:pr-8 pt-20">
          <img 
            src={bgImage} 
            alt="Studio Background" 
            className="w-full h-auto object-contain mix-blend-multiply opacity-100"
          />
        </div>
        {/* Subtle top light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/60 via-transparent to-zinc-50/80 pointer-events-none" />
      </div>

      {/* Top Floating OS Status & Navigation Header */}
      <TopNavbar
        onOpenWindow={openWindow}
        activeWindows={activeWindowIds}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
        onOpenPrivacy={() => openWindow('privacy')}
        onOpenTerms={() => openWindow('terms')}
      />

      {/* Main Desktop Canvas Area */}
      <main className="relative z-10 w-full h-full pt-20 pb-24 px-4 sm:px-8 flex flex-col justify-between overflow-y-auto custom-scrollbar">
        
        {/* Top Desktop Row: Hero Card & Desktop Folders */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 max-w-7xl mx-auto w-full">
          
          {/* Main Hero Card (ilnur.studio glass card) */}
          <div className="w-full lg:w-auto mt-4 sm:mt-8">
            <HeroCard onOpenWindow={openWindow} />
          </div>

          {/* Interactive Desktop Folders Row (Centered like in screenshot) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-10 w-full lg:w-auto my-auto">
            <DesktopFolder
              id="about"
              label="ОБО МНЕ"
              onOpen={openWindow}
              isOpen={windows.about.isOpen}
            />

            <DesktopFolder
              id="works"
              label="РАБОТЫ"
              badge={7}
              onOpen={openWindow}
              isOpen={windows.works.isOpen}
            />

            <DesktopFolder
              id="pricing"
              label="ПРОЦЕСС И ЦЕНЫ"
              badge={1}
              onOpen={openWindow}
              isOpen={windows.pricing.isOpen}
            />

            <DesktopFolder
              id="contacts"
              label="КОНТАКТЫ"
              onOpen={openWindow}
              isOpen={windows.contacts.isOpen}
            />
          </div>

        </div>

      </main>

      {/* macOS Bottom Dock Bar */}
      <DockBar
        onOpenWindow={openWindow}
        activeWindows={activeWindowIds}
        onOpenTelegram={() => window.open('https://t.me/ilnur_studio', '_blank')}
        onOpenInstagram={() => window.open('https://instagram.com', '_blank')}
      />

      {/* Windows Activation Watermark & Easter Egg Modal */}
      <WindowsActivation />

      {/* Desktop Windows System */}
      <WindowWrapper
        id="about"
        title={windows.about.title}
        isOpen={windows.about.isOpen}
        isMinimized={windows.about.isMinimized}
        isMaximized={windows.about.isMaximized}
        zIndex={windows.about.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
      >
        <AboutWindow onOpenWindow={openWindow} />
      </WindowWrapper>

      <WindowWrapper
        id="works"
        title={windows.works.title}
        isOpen={windows.works.isOpen}
        isMinimized={windows.works.isMinimized}
        isMaximized={windows.works.isMaximized}
        zIndex={windows.works.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-5xl"
      >
        <WorksWindow onOpenWindow={openWindow} />
      </WindowWrapper>

      <WindowWrapper
        id="pricing"
        title={windows.pricing.title}
        isOpen={windows.pricing.isOpen}
        isMinimized={windows.pricing.isMinimized}
        isMaximized={windows.pricing.isMaximized}
        zIndex={windows.pricing.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-5xl"
      >
        <PricingWindow onOpenWindow={openWindow} />
      </WindowWrapper>

      <WindowWrapper
        id="contacts"
        title={windows.contacts.title}
        isOpen={windows.contacts.isOpen}
        isMinimized={windows.contacts.isMinimized}
        isMaximized={windows.contacts.isMaximized}
        zIndex={windows.contacts.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-4xl"
      >
        <ContactsWindow />
      </WindowWrapper>

      <WindowWrapper
        id="notes"
        title={windows.notes.title}
        isOpen={windows.notes.isOpen}
        isMinimized={windows.notes.isMinimized}
        isMaximized={windows.notes.isMaximized}
        zIndex={windows.notes.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-2xl"
      >
        <NotesWindow />
      </WindowWrapper>

      <WindowWrapper
        id="music"
        title={windows.music.title}
        isOpen={windows.music.isOpen}
        isMinimized={windows.music.isMinimized}
        isMaximized={windows.music.isMaximized}
        zIndex={windows.music.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-md"
      >
        <MusicPlayerWindow isMuted={isMuted} onToggleMute={() => setIsMuted(!isMuted)} />
      </WindowWrapper>

      <WindowWrapper
        id="trash"
        title={windows.trash.title}
        isOpen={windows.trash.isOpen}
        isMinimized={windows.trash.isMinimized}
        isMaximized={windows.trash.isMaximized}
        zIndex={windows.trash.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-lg"
      >
        <TrashWindow />
      </WindowWrapper>

      <WindowWrapper
        id="privacy"
        title={windows.privacy.title}
        isOpen={windows.privacy.isOpen}
        isMinimized={windows.privacy.isMinimized}
        isMaximized={windows.privacy.isMaximized}
        zIndex={windows.privacy.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-2xl"
      >
        <PrivacyTermsWindow type="privacy" />
      </WindowWrapper>

      <WindowWrapper
        id="terms"
        title={windows.terms.title}
        isOpen={windows.terms.isOpen}
        isMinimized={windows.terms.isMinimized}
        isMaximized={windows.terms.isMaximized}
        zIndex={windows.terms.zIndex}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
        initialWidth="max-w-2xl"
      >
        <PrivacyTermsWindow type="terms" />
      </WindowWrapper>

    </div>
  );
}
