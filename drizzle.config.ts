import { defineConfig } from 'drizzle-kit'

export default defineConfig({
 schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:SJvw4m2MVLyQ@ep-cold-mountain-a589xo3t-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
  },
  verbose: true,
  strict: true,
})
