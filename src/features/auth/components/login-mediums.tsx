import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const LoginMediums = () => {
  const { signIn } = useAuthActions();

  const handleProviderSignIn = (value: "github" | "google") => {
    void signIn(value);
  };
  return (
    <div className="space-y-2.5">
      <Button size="lg" variant="outline" className="w-full relative ">
        <FcGoogle className="absolute text-xs top-2.5 left-2.5" />
        <span className="">Continue with Google</span>
      </Button>
      <Button
        onClick={() => handleProviderSignIn("github")}
        size="lg"
        variant="outline"
        className="w-full relative"
      >
        <FaGithub className="absolute text-xs top-2.5 left-2.5" />
        <span className="">Continue with Github</span>
      </Button>
    </div>
  );
};
