import React from "react";
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <ClerkSignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
      />
    </div>
  );
}

export default SignIn;
