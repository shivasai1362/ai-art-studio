import React from "react";
import PreferencesPanel from "./PreferencesPanel";
import GeneratedImageDisplay from "./GeneratedImageDisplay";

function GenerateImage({ preferences, setPreferences }) {
  return (
    <>
      <PreferencesPanel
        preferences={preferences}
        setPreferences={setPreferences}
      />
      <GeneratedImageDisplay />
    </>
  );
}

export default GenerateImage;
