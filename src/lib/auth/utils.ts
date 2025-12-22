import { User } from "@/lib/db/types";
import { headers } from "next/headers";
import { auth } from ".";

export async function getCurrentUserSession(): Promise<User | null> {
  const reqHeaders = await headers();
  const session = await auth.api.getSession({ headers: reqHeaders });
  if (!session?.user) {
    return null;
  }
  return session.user as User;
}
