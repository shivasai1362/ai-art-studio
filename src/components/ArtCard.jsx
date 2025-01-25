import React from 'react';

function ArtCard({ artwork }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <a href={artwork.imageurl} target="_blank" rel="noopener noreferrer" className="block relative">
        <img 
          src={artwork.imageurl} 
          alt={artwork.title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm">Click to view details</p>
        </div>
      </a>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-200">
          {artwork.title}
        </h3>
        <p className="text-gray-600 mb-3 font-medium">by {artwork.artist}</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors duration-200">
            {artwork.style}
          </span>
          <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors duration-200">
            {artwork.medium.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArtCard;
