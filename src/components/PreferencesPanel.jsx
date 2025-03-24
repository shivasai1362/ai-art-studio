import React from 'react';

function PreferencesPanel({ preferences, setPreferences }) {
  const handleFilter = (e) => {
    e.preventDefault();
    // Any additional filtering logic can go here
  };

  // Empty functions for API requests and database operations
  const handleCreateImage = () => {
    // Send API request to create AI image
    console.log("Sending request to create AI image with parameters:", preferences);
    // Implementation will connect to image generation API
  };

  const handleAddToDatabase = () => {
    // Add the current image to database
    console.log("Adding current image to database");
    // Implementation will save current image data to database
  };

  const handleRemoveFromDatabase = () => {
    // Remove the selected image from database
    console.log("Removing selected image from database");
    // Implementation will delete image from database
  };

  return (
    <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl shadow-lg border border-white/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative">
        Generate AI Art
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2"></div>
      </h2>

      <div className="space-y-6 relative">
        {/* Prompt Input for Image Generation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Describe your image
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter a detailed prompt for AI image creation..."
              value={preferences.promptText || ""}
              onChange={(e) => setPreferences({...preferences, promptText: e.target.value})}
              className="w-full bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-3 
                       text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                       transition-all duration-200 outline-none hover:bg-white/70 pl-10"
            />
            <svg 
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Art Style
          </label>
          <select
            className="w-full bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-3 
                     text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                     transition-all duration-200 outline-none hover:bg-white/70"
            value={preferences.style}
            onChange={(e) => setPreferences({...preferences, style: e.target.value})}
          >
            <option value="all">All Styles</option>
            <option value="contemporary">Contemporary</option>
            <option value="abstract">Abstract</option>
            <option value="impressionism">Impressionism</option>
            <option value="realism">Realism</option>
            <option value="surrealism">Surrealism</option>
            <option value="minimalism">Minimalism</option>
            <option value="pop-art">Pop Art</option>
            <option value="expressionism">Expressionism</option>
            <option value="conceptual">Conceptual</option>
            <option value="street-art">Street Art</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Medium
          </label>
          <select
            className="w-full bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-3 
                     text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                     transition-all duration-200 outline-none hover:bg-white/70"
            value={preferences.medium}
            onChange={(e) => setPreferences({...preferences, medium: e.target.value})}
          >
            <option value="all">All Mediums</option>
            <option value="oil-painting">Oil Painting</option>
            <option value="watercolor">Watercolor</option>
            <option value="digital-art">Digital Art</option>
            <option value="photography">Photography</option>
            <option value="sculpture">Sculpture</option>
            <option value="mixed-media">Mixed Media</option>
            <option value="illustration">Illustration</option>
            <option value="pencil-drawing">Pencil Drawing</option>
            <option value="acrylic">Acrylic Painting</option>
            <option value="collage">Collage</option>
          </select>
        </div>

        {/* Image Creation Section */}
        <div className="border-t border-gray-200/50 pt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Image Management</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {/* Create Image Button */}
            <button 
              onClick={handleCreateImage}
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-blue-500 
                       text-white font-medium rounded-xl hover:opacity-90 transition-opacity
                       duration-200 transform hover:scale-[1.02] active:scale-[0.98]
                       shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Generate AI Image
            </button>
            
            {/* Database Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleAddToDatabase}
                className="py-2 px-3 bg-gradient-to-r from-green-600 to-emerald-500 
                         text-white font-medium rounded-xl hover:opacity-90 transition-opacity
                         duration-200 shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Save to Collection
              </button>
              
              <button 
                onClick={handleRemoveFromDatabase}
                className="py-2 px-3 bg-gradient-to-r from-rose-600 to-pink-500 
                         text-white font-medium rounded-xl hover:opacity-90 transition-opacity
                         duration-200 shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove Selected
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}

export default PreferencesPanel;
