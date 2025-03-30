import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'> 
  <ClerkSignUp 
            routing="path" 
            path="/sign-up" 
            signInUrl="/sign-in"
            
          />

    </div>
        
       
  );
}

export default SignUp;
