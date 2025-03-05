import prisma from "@/db/prisma";
import MagicLinkEmail from "@/emails/magic-link";
import { resend } from "@/helpers/resend";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    magicLink({
      disableSignUp: false,
      expiresIn: 600,
      sendMagicLink: async ({ email, url }) => {
        await resend.emails.send({
          from: "Invoice App <support@resend.dev>",
          to: email,
          subject: "Your magic link to sign in to Invoice App",
          react: MagicLinkEmail({ magicLink: url }),
        });
      },
    }),
  ],
});
