import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };
  
  const navigateTo = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm py-4 px-6 border-b border-gray-200/80">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center" onClick={() => navigateTo("/")} role="button" tabIndex="0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
            A
          </div>
          <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            AI Art Studio
          </h1>
        </div>

        {/* Navigation Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium"
            onClick={() => navigateTo("/generate")}
          >
            Generate Images
          </button>
          <button 
            className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium"
            onClick={() => navigateTo("/collections")}
          >
            Collections
          </button>
        </div>

        {/* User Profile and Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-indigo-600 border border-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
            Sign Up
          </button>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium shadow-md shadow-indigo-500/20 hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
            Sign In
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Mobile buttons (simplified) */}
        <div className="flex md:hidden items-center space-x-2">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 text-sm rounded-lg font-medium shadow-md">
            Sign In
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-2 bg-white/90 backdrop-blur-sm mt-2 rounded-lg shadow-md">
          <div className="flex flex-col space-y-2">
            <button 
              className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium text-left"
              onClick={() => navigateTo("/generate")}
            >
              Generate Images
            </button>
            <button 
              className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium text-left"
              onClick={() => navigateTo("/collections")}
            >
              Collections
            </button>
            <div className="border-t border-gray-200 my-2"></div>
            <button 
              className="px-4 py-3 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors font-medium text-left flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Sign Up
            </button>
            <button 
              className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium text-left flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              My Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
