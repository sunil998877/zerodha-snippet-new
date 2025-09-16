import mongoose from "mongoose";


const connectDB =  () => {
  try {
     mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
    return true;
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
