import { useState } from 'react';
import { Layout } from './components/Layout';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Player } from './pages/Player';
import { AISummary } from './pages/AISummary';
import { PodcastStudio } from './pages/PodcastStudio';
import { FileManagement } from './pages/FileManagement';
import { CalendarPage } from './pages/CalendarPage';
import { Profile } from './pages/Profile';
import { RecordingView } from './pages/RecordingView';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState<'main' | 'player' | 'summary' | 'podcast' | 'recording'>('main');
  const [summaryTab, setSummaryTab] = useState<'summary' | 'transcript' | 'translation'>('summary');

  const goToMain = () => setCurrentView('main');

  const openSummary = (tab: 'summary' | 'transcript' | 'translation' = 'summary') => {
    setSummaryTab(tab);
    setCurrentView('summary');
  };

  const renderContent = () => {
    // If we're in a specific view, render that instead of the tab content
    if (currentView === 'summary') {
      return <AISummary onBack={goToMain} initialTab={summaryTab} />;
    }

    switch (activeTab) {
      case 'home':
        return <Home
          onPlay={() => setCurrentView('player')}
          onOpenSummary={() => openSummary('summary')}
        />;
      case 'files': return <FileManagement />;
      case 'calendar': return <CalendarPage />;
      case 'profile': return <Profile />;
      default: return <Home onPlay={() => setCurrentView('player')} onOpenSummary={() => setCurrentView('summary')} />;
    }
  };

  const handleRecord = () => {
    setCurrentView('recording');
  };

  const handleStopRecording = () => {
    // Simulate processing then go to summary
    setCurrentView('summary');
  };

  return (
    <Layout>
      {renderContent()}

      {/* Global Player Overlay (if in player mode) */}
      {currentView === 'player' && (
        <Player
          onClose={goToMain}
          onOpenSummary={openSummary}
        />
      )}

      {/* Podcast Studio Overlay */}
      {currentView === 'podcast' && (
        <PodcastStudio onClose={goToMain} />
      )}

      {/* Recording Overlay */}
      {currentView === 'recording' && (
        <RecordingView onStop={handleStopRecording} />
      )}

      {/* Show Bottom Nav only on main views */}
      {currentView === 'main' && (
        <BottomNav
          currentTab={activeTab}
          onTabChange={setActiveTab}
          onRecord={handleRecord}
        />
      )}
    </Layout>
  );
}

export default App;
