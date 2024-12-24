import mongoose from "mongoose";
import waitPort from "wait-port";

const connectDB = async (): Promise<void> => {
  try {
    // Ensure proper environment variables
    const mongoHost = process.env.MONGO_HOST || "mongo";
    const mongoPort = parseInt(process.env.MONGO_PORT || "27017", 10);
    const mongoURI =
      process.env.MONGO_URI ||
      `mongodb://root:admin@${mongoHost}:${mongoPort}/finance?authSource=finance`;

    console.log(`Connecting to MongoDB at ${mongoURI}`);

    // Wait for MongoDB to be ready
    const isReady = await waitPort({ host: mongoHost, port: mongoPort, timeout: 10000 });
    if (!isReady) {
      throw new Error("MongoDB did not respond in time.");
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};


export default connectDB;
