import { defineConfig } from 'drizzle-kit'

export default defineConfig({
 schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:aUwtGkmAl0s8@ep-crimson-waterfall-a5wp12et-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
  },
  verbose: true,
  strict: true,
})
