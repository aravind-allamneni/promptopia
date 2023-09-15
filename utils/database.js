import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  // mongoose.set("StrictQuery", true);
  // check if db connection already exists
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  // if already not connected try to establish the connection
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
