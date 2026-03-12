import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export default async function connectDB() {
    const client = new MongoClient(process.env.MONGODB_URI);
    try {
        const DB = client.db(process.env.DATABASE);
        if (DB) {
            return DB;
        } else {
            console.error('Failed to connect to MongoDB');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}