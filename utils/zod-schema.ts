import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Please provide a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
