import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
const Verify = () => {
  return (
    <Card>
      <CardHeader className="space-y-1 items-center text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">Check your email</CardTitle>
        <CardDescription>
          We've sent a verification link to the provided email address.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Click the link in the email to verify your account and continue. If
          you don't see the email, check your spam folder.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full" asChild variant="outline">
          <Link href="/">
            <ArrowLeft /> Back to Home
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Verify;
