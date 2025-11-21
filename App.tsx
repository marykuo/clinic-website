import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { NewsView } from './components/NewsView';
import { HoursView } from './components/HoursView';
import { FaqView } from './components/FaqView';
import { TransportView } from './components/TransportView';
import { DoctorsView } from './components/DoctorsView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setView={setCurrentView} />;
      case 'news':
        return <NewsView />;
      case 'hours':
        return <HoursView />;
      case 'faq':
        return <FaqView />;
      case 'transport':
        return <TransportView />;
      case 'doctors':
        return <DoctorsView />;
      default:
        return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <Header currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;