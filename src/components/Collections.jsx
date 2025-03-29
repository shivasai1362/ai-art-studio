import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TopModal from './TopModal'
import { backendUrl } from '../utils/apiConfig';

function Collections() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [modalInfo, setModalInfo] = useState({
    isVisible: false,
    message: '',
    status: 'success'
  })

  const fetchImages = async() => {
    setLoading(true)
    setModalInfo({
      isVisible: true,
      message: "Loading Images",
      status: "processing"
    });
    try {
      const res = await axios.get(`${backendUrl}/getimages`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      setImages(res.data)
      setModalInfo({
        isVisible: true,
        message: 'Images loaded successfully!',
        status: 'success'
      })
    } catch (error) {
      console.error(error)
      setModalInfo({
        isVisible: true,
        message: 'Failed to load images',
        status: 'error'
      })
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    // Auto-fetch images when component mounts
    fetchImages()
  }, [])

  const downloadImage = (imageData, index) => {
    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = `data:image/png;base64,${imageData}`;
    downloadLink.download = `generated-image-${index + 1}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Show success modal
    setModalInfo({
      isVisible: true,
      message: 'Image downloading...',
      status: 'success'
    });
  }

  const handleDeleteImage = async (imageId) => {
    try {
      setModalInfo({
        isVisible: true,
        message: 'Deleting image...',
        status: 'processing'
      });
      
      const response = await axios.delete(`${backendUrl}/deleteimage/${imageId}`);
      console.log(response.data);

      // Remove the deleted image from state
      setImages(prevImages => prevImages.filter(img => img.id !== imageId));
      
      setModalInfo({
        isVisible: true,
        message: 'Image deleted successfully!',
        status: 'success'
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      setModalInfo({
        isVisible: true,
        message: 'Failed to delete image',
        status: 'error'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <TopModal 
        isVisible={modalInfo.isVisible}
        message={modalInfo.message}
        status={modalInfo.status}
        onClose={() => setModalInfo({...modalInfo, isVisible: false})}
      />
      
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Your Collection</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mb-8"></div>
        
        <button 
          onClick={fetchImages} 
          className="mb-8 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading Images...
            </>
          ) : (
            <>Refresh Collection</>
          )}
        </button>
      </div>

      {images.length === 0 && !loading ? (
        <div className="flex flex-col items-center justify-center py-12 bg-white/50 rounded-xl">
          <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p className="text-gray-600 text-lg">Your collection is empty</p>
          <p className="text-gray-500 text-sm mt-2">Generate some images to see them here</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((imageObj, index) => (
            <div 
              key={imageObj.id || index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
            >
              <div 
                className="relative overflow-hidden cursor-pointer"
                onClick={() => downloadImage(imageObj.image, index)}
              >
                <img 
                  src={`data:image/png;base64,${imageObj.image}`}
                  alt={`Generated Image ${imageObj.id || index}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <p className="text-white font-medium">Download image</p>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-800 font-medium">Generated Image {imageObj.id || index + 1}</h3>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage(imageObj.id);
                    }} 
                    className="p-1.5 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors"
                    aria-label="Delete image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-1">Click to download</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collections