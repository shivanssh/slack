import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginMediums } from "./login-mediums";
import { SignInFlow } from "../type";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { SingInFlowFooter } from "./sign-in-flow-footer";

interface ISignInProps {
  onSignUp: (state: SignInFlow) => void;
}

const SignInCard = ({ onSignUp }: ISignInProps) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          User your email or another mediums to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-0 px-0">
        <form onSubmit={handleFormSubmit} className="space-y-3">
          <Input
            name="email"
            value={formData.email}
            onChange={handleFormValueChange}
            disabled={false}
            placeholder="Email"
            type="email"
            required
          ></Input>
          <Input
            name="password"
            value={formData.password}
            onChange={handleFormValueChange}
            disabled={false}
            placeholder="Password"
            type="password"
            required
          ></Input>
          <Button className="w-full cursor-pointer">Continue</Button>
        </form>
        <Separator />
        <LoginMediums />
        <SingInFlowFooter signInFlowState="signin" handleSignUpClick={onSignUp} />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
