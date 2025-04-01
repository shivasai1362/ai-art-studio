import axios from "axios";
import React, { useState } from "react";
import TopModal from "./TopModal";
import { backendUrl } from "../utils/apiConfig";

function GeneratedImageDisplay({ urls }) {
  const [isSaving, setSaving] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    isVisible: false,
    message: '',
    status: 'success'
  });

  const handleSaveToDb = async (url) => {
    setSaving(true);
    
    // Show processing modal
    setModalInfo({
      isVisible: true,
      message: 'Adding image to collection...',
      status: 'processing'
    });

    try {
      const response = await axios.post(
        `${backendUrl}/saveimage`,
        { imageUrl: url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      // Show success modal
      setModalInfo({
        isVisible: true,
        message: 'Image saved to collection!',
        status: 'success'
      });
    } catch (error) {
      console.log(error);
      
      // Show error modal
      setModalInfo({
        isVisible: true,
        message: 'Failed to save image to collection',
        status: 'error'
      });
    } finally {
      setSaving(false);
    }
  };

  function handleDownload(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="relative w-full ml-0 lg:ml-2 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 lg:overflow-x-hidden lg:overflow-scroll lg:max-h-[86vh]">
      <TopModal 
        isVisible={modalInfo.isVisible}
        message={modalInfo.message}
        status={modalInfo.status}
        onClose={() => setModalInfo({...modalInfo, isVisible: false})}
      />
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        AI Art Generator
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2"></div>
      </h2>

      {urls.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 bg-white/50 rounded-xl border border-white/30 transition-all hover:bg-white/60">
          <svg
            className="w-20 h-20 text-indigo-300 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-700 font-medium text-lg">
            Generated images will appear here
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Fill in the form and click "Generate AI Image" to create artwork
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {urls.map((url, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={url}
                alt={`Generated Image ${index + 1}`}
                
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">
                    Generated Image {index + 1}
                  </p>
                  <div className="flex mt-2 space-x-2">
                    {/*Download Button*/}
                    <button 
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                      onClick={() => {handleDownload(url)}}
                      title="Download image"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                    {/*Add to Collection Button '+'*/}
                    <button
                      disabled={isSaving}
                      onClick={() => handleSaveToDb(url)}
                      className={`p-2 backdrop-blur-sm rounded-full transition-colors text-white ${
                        isSaving
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-white/20 hover:bg-white/30"
                      }`}
                      title="Add to collection"
                    >
                      {isSaving ? (
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GeneratedImageDisplay;
