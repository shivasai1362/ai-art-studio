import React from 'react';
import ArtCard from './ArtCard';

function ArtFeed() {
  const mockArtworks = [
    {
      id: 1,
      title: "Abstract Harmony",
      artist: "Jane Doe",
      imageUrl: "https://source.unsplash.com/random/800x600?abstract",
      style: "abstract",
      medium: "digital"
    },
    {
      id: 2,
      title: "Urban Dreams",    
      artist: "John Smith",
      imageUrl: "https://source.unsplash.com/random/800x600?art",
      style: "contemporary",
      medium: "painting"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
      {mockArtworks.map(artwork => (
        <ArtCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}

export default ArtFeed;
