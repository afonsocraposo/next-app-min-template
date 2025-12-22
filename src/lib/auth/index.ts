import { db } from "@/lib/db";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { account, session, user, verification } from "@/lib/db/auth-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification,
    },
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`,
    },
  },
  trustedOrigins: [process.env.NEXT_PUBLIC_BASE_URL as string],
  session: {
    expiresIn: 60 * 60 * 24 * 365, // 1 year
  },
  plugins: [],
});
