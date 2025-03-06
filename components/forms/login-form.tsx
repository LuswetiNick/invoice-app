"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { loginSchema } from "@/lib/zod-schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      await authClient.signIn.magicLink(
        {
          email: values.email,
          callbackURL: "/verified",
        },
        {
          onRequest: () => {
            setIsLoading(true);
          },
          onResponse: () => {
            setIsLoading(false);
            toast.success("Magic Link sent to your email");
            router.push("/verify");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Something went wrong.");
          },
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    console.log(values);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your email below to login</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader className="animate-spin h-4 w-4" />
              ) : (
                "Continue"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default LoginForm;
