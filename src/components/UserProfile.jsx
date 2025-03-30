import React, { useState } from 'react';
import { useUser, SignOutButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import TopModal from './TopModal';

function UserProfile() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  
  
  if (!isLoaded) {
    return (
      <div className="pt-20 container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg animate-pulse">
          <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="h-10 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  const [modalState, setModalState] = useState({
    isVisible: false,
    message: "",
    status: "success"

  });

  const handleCopyUserId = (userId) => {
    navigator.clipboard.writeText(userId).then(()=>{
      setModalState({
        isVisible: true,
        message: "User ID copied to clipboard!",
        status: "success"
      });
    })
    .catch((error) => {
      setModalState({
        isVisible: true,
        message: "Failed to copy User ID.",
        status: "error"
      });
    })
  }

  return (
    <div className="pt-20 container mx-auto px-4 py-8">
      <TopModal
        onClose={() => setModalState({ ...modalState, isVisible: false })}
        isVisible={modalState.isVisible}
        message={modalState.message}
        status={modalState.status}
       />
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          User Profile
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-white">
            {user.imageUrl ? (
              <img 
                src={user.imageUrl} 
                alt={user.fullName || "User"} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                {user.firstName?.[0] || "U"}
              </div>
            )}
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold">{user.fullName || "User"}</h3>
            <p className="text-gray-600">{user.primaryEmailAddress?.emailAddress}</p>
            
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              <button
              onClick={() => handleCopyUserId(user.id)}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                User ID: {user.id.substring(0, 8)}...
              </button>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Verified Email
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h4 className="text-lg font-medium mb-4">Account Management</h4>
          
          <div className="space-y-4">
            <button
              onClick={() => window.Clerk?.openUserProfile()}
              className="w-full py-2 px-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Profile
            </button>
            
            <SignOutButton signOutCallback={() => navigate('/')}>
              <button className="w-full py-2 px-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/generate')}
            className="text-indigo-600 text-sm font-medium hover:text-indigo-800"
          >
            Return to Generate Images
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
