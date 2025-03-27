import React, { useState } from "react";
import PreferencesPanel from "./PreferencesPanel";
import GeneratedImageDisplay from "./GeneratedImageDisplay";

function GenerateImage({ preferences, setPreferences }) {

  const [urls, setUrls] = useState([]);

  return (
    <>
      <PreferencesPanel
        preferences={preferences}
        setPreferences={setPreferences}
        urls={urls}
        setUrls={setUrls}
      />
      <GeneratedImageDisplay urls={urls} />
    </>
  );
}

export default GenerateImage;
