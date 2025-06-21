import { SignInFlow } from "../type";

interface ISingInFlowFooterProps {
  handleSignUpClick: (state: SignInFlow) => void;
  signInFlowState: SignInFlow;
}
export const SingInFlowFooter = ({
  signInFlowState,
  handleSignUpClick,
}: ISingInFlowFooterProps) => {
  if (signInFlowState === "signin") {
    return (
      <p className="text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <span
          onClick={() => handleSignUpClick("signup")}
          className="text-sky-700 hover:underline hover:cursor-pointer"
        >
          Sign up
        </span>
      </p>
    );
  }

  return (
    <p className="text-sm text-muted-foreground">
      Already have an account?{" "}
      <span
        onClick={() => handleSignUpClick("signin")}
        className="text-sky-700 hover:underline hover:cursor-pointer"
      >
        Sign in
      </span>
    </p>
  );
};
