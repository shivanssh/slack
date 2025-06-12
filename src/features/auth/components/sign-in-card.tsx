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
import Link from "next/link";

const SignInCard = () => {
  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          User your email or another mediums to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-0 px-0">
        <form className="space-y-3">
          <Input
            name="email"
            value=""
            onChange={() => {}}
            disabled={false}
            placeholder="Email"
            type="email"
            required
          ></Input>
          <Input
            name="password"
            value=""
            onChange={() => {}}
            disabled={false}
            placeholder="Password"
            type="password"
            required
          ></Input>
          <Button className="w-full cursor-pointer">Sign In</Button>
        </form>
        <Separator />
        <LoginMediums />

        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-sky-700 hover:underline">
            SignUp
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
