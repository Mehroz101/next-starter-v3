import { z } from "zod";

// Define the schema for your env vars
const envSchema = z.object({
  SECRET_KEY: z.string().min(10, "SECRET_KEY must be at least 10 characters long"),
  REFRESH_TOKEN_SECRET_KEY: z
    .string()
    .min(10, "REFRESH_TOKEN_SECRET_KEY must be at least 10 characters long"),
  DATABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
  NODE_ENV: z.enum(["development", "test", "production"]).optional(),
});

const isProd = process.env.NODE_ENV === "production";

// Provide safe defaults in non-production to avoid dev crashes
const rawEnv = {
  SECRET_KEY:
    process.env.SECRET_KEY ?? (isProd ? undefined : "dev_secret_key_please_change"),
  REFRESH_TOKEN_SECRET_KEY:
    process.env.REFRESH_TOKEN_SECRET_KEY ??
    (isProd ? undefined : "dev_refresh_secret_please_change"),
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NODE_ENV: process.env.NODE_ENV,
};

// Parse and validate at startup
const parsed = envSchema.safeParse(rawEnv);

if (!parsed.success) {
  throw new Error("Environment validation failed. Check your .env file.");
}

// Export a single object
export const env = parsed.data;
