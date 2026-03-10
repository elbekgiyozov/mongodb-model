import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB ga ulandi");
  } catch (err) {
    console.error("MongoDB ulanish xatosi:", err.message);
    process.exit(1);
  }
};

export default connectDb;
