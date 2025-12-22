import { User as DbUser } from "@/lib/db/types";
import { headers } from "next/headers";
import { auth } from ".";
import { User } from "better-auth/types";
import { UserRepository } from "../repositories/user";

export async function getSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

export async function getSessionUser(): Promise<User | null> {
  const session = await getSession();
  if (!session) return null;
  return session.user;
}

export async function getUser(): Promise<DbUser | null> {
  const user = await getSessionUser();
  if (!user) return null;
  return new UserRepository(user.id).getUser();
}
