import { z } from "zod";

// Define the schema for your env vars
const envSchema = z.object({
  SECRET_KEY: z.string().min(10, "SECRET_KEY must be at least 10 characters long"),
  DATABASE_URL: z.url().optional(), // optional example
  NEXT_PUBLIC_API_URL: z.url().optional(), // optional example
});

// Parse and validate at startup
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid or missing environment variables:", parsed.error.format());
  throw new Error("Environment validation failed. Check your .env file.");
}

// Export a single object
export const env = {
  SECRET_KEY: parsed.data.SECRET_KEY, // ✅ user mostly needs this
  DATABASE_URL: parsed.data.DATABASE_URL,
  NEXT_PUBLIC_API_URL: parsed.data.NEXT_PUBLIC_API_URL,
};
