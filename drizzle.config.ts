import { defineConfig } from 'drizzle-kit'

export default defineConfig({
 schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:dnsLyDmR2zj9@ep-super-star-a5vj7q3c.us-east-2.aws.neon.tech/neondb?sslmode=require"
  },
  verbose: true,
  strict: true,
})
