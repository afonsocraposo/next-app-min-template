import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/lib/db/generated",
  schema: ["./src/lib/db/schema.ts", "./src/lib/db/auth-schema.ts"],
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    ssl: {
      rejectUnauthorized: process.env.ENVIRONMENT === "production",
    },
  },
  strict: true,
  verbose: true,
});
