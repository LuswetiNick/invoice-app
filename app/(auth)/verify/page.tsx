import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Verify = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="flex justify-center mb-2">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <CardTitle className="text-2xl">Email Verified!</CardTitle>
        <CardDescription>
          Your email has been successfully verified.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Thank you for verifying your email address. Your account is now fully
          activated.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button asChild className="w-full">
          <Link href="/dashboard">Proceed to Dashboard</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/">Return to Home</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Verify;
