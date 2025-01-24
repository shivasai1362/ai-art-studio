import React, { useState } from 'react';
import Header from './components/Header';
import ArtFeed from './components/ArtFeed';
import PreferencesPanel from './components/PreferencesPanel';

function App() {
  const [preferences, setPreferences] = useState({
    style: 'all',
    medium: 'all',
    period: 'all'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-600/5 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <Header />
      <main className="container mx-auto px-4 py-8 flex flex-col items-center relative z-10">
        <div className="w-full max-w-xl mb-12">
          <PreferencesPanel 
            preferences={preferences} 
            setPreferences={setPreferences}
          />
        </div>
        <div className="w-full">
          <ArtFeed preferences={preferences} />
        </div>
      </main>
    </div>
  );
}

export default App;