import { User } from "@/lib/db/types";
import { db } from "@/lib/db";
import { user } from "@/lib/db/auth-schema";
import { eq } from "drizzle-orm";

export class UserRepository {
  constructor(public readonly id: string) { }

  async getUser(): Promise<User | null> {
    const [dbUser] = await db
      .select()
      .from(user)
      .where(eq(user.id, this.id))
      .limit(1);
    return dbUser || null;
  }
}
