import { defineConfig } from 'drizzle-kit'

export default defineConfig({
 schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:TGhSdf4v5jKc@ep-dawn-scene-a2bjkq0m-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require"
  },
  verbose: true,
  strict: true,
})
