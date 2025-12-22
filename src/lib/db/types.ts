import { InferSelectModel } from "drizzle-orm";
import { user } from "./auth-schema";

export type User = InferSelectModel<typeof user>;
