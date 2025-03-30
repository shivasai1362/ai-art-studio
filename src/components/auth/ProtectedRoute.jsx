import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isLoaded, userId } = useAuth();
  
  if (!isLoaded) {
    // Loading state while Clerk loads
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  if (!userId) {
    // Redirect to sign-in if user is not authenticated
    return <Navigate to="/sign-in" replace />;
  }
  
  // If authenticated, render the protected content
  return children;
}

export default ProtectedRoute;
