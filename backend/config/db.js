import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://bishalkandi859494:ImGlaIyLNX4lmceO@cluster0.xvo7xnt.mongodb.net/food-app')  .then(()=> console.log("db connected"));
  
}