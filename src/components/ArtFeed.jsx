import React, { useEffect, useState } from 'react';
import ArtCard from './ArtCard';
import axios from 'axios';

function ArtFeed({ preferences }) {
  // const mockArtworks = [
  //   {
  //     id: 1,
  //     title: "Abstract Harmony",
  //     artist: "Jane Doe",
  //     imageUrl: "https://source.unsplash.com/random/800x600?abstract-art",
  //     style: "abstract",
  //     medium: "digital-art"
  //   },
  //   {
  //     id: 2,
  //     title: "Urban Dreams",    
  //     artist: "John Smith",
  //     imageUrl: "https://source.unsplash.com/random/800x600?street-art",
  //     style: "street-art",
  //     medium: "mixed-media"
  //   },
  //   {
  //     id: 3,
  //     title: "Sunset Impressions",
  //     artist: "Marie Claire",
  //     imageUrl: "https://source.unsplash.com/random/800x600?impressionism",
  //     style: "impressionism",
  //     medium: "oil-painting"
  //   },
  //   {
  //     id: 4,
  //     title: "Digital Landscape",
  //     artist: "Alex Chen",
  //     imageUrl: "https://source.unsplash.com/random/800x600?digital-landscape",
  //     style: "contemporary",
  //     medium: "digital-art"
  //   },
  //   {
  //     id: 5,
  //     title: "Minimalist Study",
  //     artist: "Sarah White",
  //     imageUrl: "https://source.unsplash.com/random/800x600?minimalism",
  //     style: "minimalism",
  //     medium: "acrylic"
  //   }
  // ];

  // Filter artworks based on preferences
  const [mockArtworks, setMockArtWorks] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/artworks")
    .then((response) => setMockArtWorks(response.data))
    .catch((err) => {
      console.error("Error fetching artworks:", err);
    });
  }, [])
  
  const filteredArtworks = mockArtworks.filter(artwork => {
    const styleMatch = preferences.style === 'all' || artwork.style === preferences.style;
    const mediumMatch = preferences.medium === 'all' || artwork.medium === preferences.medium;
    return styleMatch && mediumMatch;
  });

  // Show message if no matches found
  if (filteredArtworks.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-gray-600">No artworks match your preferences</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-gray-600 mb-6 text-center">
        Showing {filteredArtworks.length} {filteredArtworks.length === 1 ? 'artwork' : 'artworks'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {filteredArtworks.map(artwork => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </>
  );
}

export default ArtFeed;
