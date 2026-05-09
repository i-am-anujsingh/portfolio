import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

export default async function connectDB() {

  try {

    // Reuse existing connection
    if (db) return db;

    // Connect to MongoDB
    await client.connect();

    console.log("✅ MongoDB Connected");

    db = client.db(process.env.DATABASE);

    return db;

  } catch (error) {

    console.error("❌ MongoDB Connection Error:", error);

    process.exit(1);
  }
}