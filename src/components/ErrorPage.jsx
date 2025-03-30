import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  
  let title = "Something went wrong";
  let message = "An unexpected error has occurred.";
  
  if (error?.status === 404) {
    title = "Page not found";
    message = "Sorry, the page you are looking for doesn't exist.";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-5">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-gray-800">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        
        <div className="space-y-3">
          <button 
            onClick={() => navigate('/')}
            className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Return to Home
          </button>
          
          <button 
            onClick={() => navigate(-1)}
            className="w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all"
          >
            Go Back
          </button>
        </div>
        
        {error && process.env.NODE_ENV === 'development' && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
            <p className="text-sm font-medium text-gray-700">Error details:</p>
            <pre className="text-xs text-red-600 mt-1 overflow-auto max-h-24">
              {error.message || JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ErrorPage;
