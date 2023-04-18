import mongoose from "mongoose";

mongoose.set("strictQuery", false);
export const Connection = async () => {
  const URL =
    "mongodb+srv://Shubham9709:Forgot_password@cluster0.imzwrf7.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successsfully connected to the database");
  } catch (error) {
    console.log("Unable to connect to the database", error.message);
  }
};
export default Connection;

// mongodb://127.0.0.1:27017/todolistDB
