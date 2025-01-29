import mongoose from "mongoose";
import config from "./config/index.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Stop server on connection failure
  }
};

export default connectDB;
