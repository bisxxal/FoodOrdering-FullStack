import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_DB)  .then(()=> console.log("db connected"));
  
}