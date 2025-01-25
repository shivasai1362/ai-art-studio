import React from 'react';

function PreferencesPanel({ preferences, setPreferences }) {
  const handleFilter = (e) => {
    e.preventDefault();
    // Any additional filtering logic can go here
  };

  return (
    <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl shadow-lg border border-white/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative">
        Customize Your Feed
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2"></div>
      </h2>

      <div className="space-y-6 relative">
        {/* Search Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Search Artwork
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title or artist..."
              value={preferences.searchTerm}
              onChange={(e) => setPreferences({...preferences, searchTerm: e.target.value})}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            Artwork Type
          </label>
          <select
            className="w-full bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-3 
                     text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                     transition-all duration-200 outline-none hover:bg-white/70"
            value={preferences.medium}
            onChange={(e) => setPreferences({...preferences, medium: e.target.value})}
          >
            <option value="all">All Types</option>
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

        {/* <div className="pt-4">
          <button 
            onClick={handleFilter}
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-pink-500 
                     text-white font-medium rounded-xl hover:opacity-90 transition-opacity
                     duration-200 transform hover:scale-[1.02] active:scale-[0.98]
                     shadow-lg shadow-indigo-500/25"
          >
            Apply Filters
          </button>
        </div> */}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}

export default PreferencesPanel;
