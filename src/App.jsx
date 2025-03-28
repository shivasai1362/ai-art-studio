import React, { useState } from 'react';
import Header from './components/Header';
import PreferencesPanel from './components/PreferencesPanel';
import GenerateImage from './components/GenerateImage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Collections from './components/Collections';
import Layout from './components/Layout';
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
      element: <Layout />,
      children: [
        {path: "/", element: <Home />},
        {path: "generate", element: <GenerateImage preferences={preferences} setPreferences={setPreferences} />},
        {path: "collections", element: <Collections />},
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <RouterProvider router={BrowserRouter} />
    </div>
  );
}

export default App;