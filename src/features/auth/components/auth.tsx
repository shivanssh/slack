"use client";
import { useState } from "react";
import { SignInFlow } from "../type";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

const Auth = () => {
  const [signInState, setSignInState] = useState<SignInFlow>("signin");
  const handleSignInState = (currentState: SignInFlow) => {
    setSignInState(currentState);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="md:h-auto md:w-[420px]">
        {signInState === "signin" ? (
          <SignInCard onSignUp={handleSignInState} />
        ) : (
          <SignUpCard onSignUp={handleSignInState} />
        )}
      </div>
    </div>
  );
};

export default Auth;
