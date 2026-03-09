import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_DB = process.env.MONGODB_DB || "11osolutions";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

// ─── Global cache for development (prevents multiple connections during HMR) ──

interface MongoCache {
  client: MongoClient | null;
  promise: Promise<MongoClient> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoCache: MongoCache | undefined;
}

const cached: MongoCache = global._mongoCache ?? { client: null, promise: null };

if (!global._mongoCache) {
  global._mongoCache = cached;
}

// ─── Connect ──────────────────────────────────────────────────────────────────

async function getClient(): Promise<MongoClient> {
  if (cached.client) return cached.client;

  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGODB_URI, {
      maxPoolSize: 10,
    });
  }

  cached.client = await cached.promise;
  return cached.client;
}

export async function getDb(): Promise<Db> {
  const client = await getClient();
  return client.db(MONGODB_DB);
}

export default getClient;