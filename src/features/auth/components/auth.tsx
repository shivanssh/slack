"use client";
import { useState } from "react";
import { SignInFlow } from "../type";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

const Auth = () => {
  const [signInState, setSignInState] = useState<SignInFlow>("signin");
  return (
    <div className="md:h-auto md:w-[420px]">
      {signInState === "signin" ? <SignInCard /> : <SignUpCard />}
    </div>
  );
};

export default Auth;
