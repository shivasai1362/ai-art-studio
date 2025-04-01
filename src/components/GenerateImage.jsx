import React, { useState } from "react";
import PreferencesPanel from "./PreferencesPanel";
import GeneratedImageDisplay from "./GeneratedImageDisplay";

function GenerateImage() {
  const [urls, setUrls] = useState([
    
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
      <GeneratedImageDisplay urls={urls} preferences={preferences} />
      </div>
      </main>
    </>
  );
}

export default GenerateImage;
