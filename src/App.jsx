import React, { useState } from 'react';
import Header from './components/Header';
import PreferencesPanel from './components/PreferencesPanel';
import GenerateImage from './components/GenerateImage';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Collections from './components/Collections';
// Remove ArtFeed import

function App() {
  const [preferences, setPreferences] = useState({
    style: 'all',
    medium: 'all',
    period: 'all',
    promptText: ""
  });

  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "collections",
      element: <Collections />
    },
    {
      path: "generate",
      element: <GenerateImage 
        preferences={preferences} 
        setPreferences={setPreferences}
      />
    }

  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      
      <Header />
      <main className=" mt-16 mx-auto px-4 py-8 flex flex-col items-center relative z-10">
        <div className="w-full mb-12 lg:flex">
          <GenerateImage 
            preferences={preferences} 
            setPreferences={setPreferences}
          />
        </div>
        <div className="w-full">
          {/* ArtFeed component has been removed */}
          
        </div>
      </main>
    </div>
  );
}

export default App;