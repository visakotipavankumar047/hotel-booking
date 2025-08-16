import { MongoClient } from "mongodb";

let client;
let db;

const connectDB = async () => {
  try {
    if (!client) {
      client = new MongoClient(`${process.env.MONGODB_URL}/hotel-booking`);
      await client.connect();
      db = client.db(); // defaults to "hotel-booking"
      console.log("Database Connected");
    }
    return db;
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    throw error;
  }
};

export default connectDB;
