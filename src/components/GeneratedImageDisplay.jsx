import React from "react";

function GeneratedImageDisplay() {
  return (
    <div className="w-full ml-0 lg:ml-2 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        AI Art Generator
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2"></div>
      </h2>
      <div className="flex items-center justify-center h-96 bg-white/50 rounded-xl border border-white/30">
        <p className="text-gray-500">Generated images will appear here</p>
      </div>
    </div>
  );
}

export default GeneratedImageDisplay;
