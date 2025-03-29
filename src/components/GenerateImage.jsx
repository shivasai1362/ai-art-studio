import React, { useState } from "react";
import PreferencesPanel from "./PreferencesPanel";
import GeneratedImageDisplay from "./GeneratedImageDisplay";

function GenerateImage() {
  const [urls, setUrls] = useState([
    "https://images.unsplash.com/photo-1737222561123-269af6be3e15?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1742943679521-f4736500a471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
  ]);

  const [preferences, setPreferences] = useState({
      style: 'all',
      medium: 'all',
      period: 'all',
      promptText: ""
    });

  return (
    <>
      <main className=" mt-16 mx-auto px-4 py-8 flex flex-col items-center relative z-10">
        <div className="w-full mb-12 lg:flex">
      <PreferencesPanel
        preferences={preferences}
        setPreferences={setPreferences}
        urls={urls}
        setUrls={setUrls}
      />
      <GeneratedImageDisplay urls={urls} />
      </div>
      </main>
    </>
  );
}

export default GenerateImage;
