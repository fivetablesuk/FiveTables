import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

type Db = ReturnType<typeof drizzle<typeof schema>>;

const globalForDb = globalThis as unknown as {
  db?: Db;
};

function createDb(): Db {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set.");
  }

  const sql = neon(databaseUrl);
  return drizzle(sql, { schema });
}

/** Lazy DB client — only connects when a query runs (safe for Vercel builds). */
export function getDb(): Db {
  if (!globalForDb.db) {
    globalForDb.db = createDb();
  }
  return globalForDb.db;
}

export const db = new Proxy({} as Db, {
  get(_target, property, receiver) {
    const client = getDb();
    const value = Reflect.get(client, property, receiver);
    return typeof value === "function" ? value.bind(client) : value;
  },
});
