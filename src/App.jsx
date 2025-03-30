import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Home from './components/Home';
import GenerateImage from './components/GenerateImage';
import Collections from './components/Collections';
import Layout from './components/Layout';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserProfile from './components/UserProfile';
import SignUpSSOCallback from './components/SignUpSSOCallback';
import ErrorPage from './components/ErrorPage';

// Get the publishable key from environment variables
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  if (!publishableKey) {
    console.error("Missing Clerk publishable key");
  }
  
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { 
          path: "generate", 
          element: <ProtectedRoute><GenerateImage /></ProtectedRoute> 
        },
        { 
          path: "collections", 
          element: <ProtectedRoute><Collections /></ProtectedRoute> 
        },
        { path: "sign-in", element: <SignIn /> },
        {path: "/sign-in/sso-callback", element: <SignUpSSOCallback />},
        {path: "/sign-up/sso-callback", element: <SignUpSSOCallback />},
        { path: "sign-up", element: <SignUp /> },
        { 
          path: "profile", 
          element: <ProtectedRoute><UserProfile /></ProtectedRoute> 
        },
      ]
    }
  ]);

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <RouterProvider router={BrowserRouter} />
      </div>
    </ClerkProvider>
  );
}

export default App;