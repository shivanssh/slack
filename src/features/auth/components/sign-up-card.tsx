import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const SignUpCard = () => {
  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          User your email or another mediums to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <form className="space-y-2.5">
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
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
