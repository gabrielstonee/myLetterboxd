import mongoose from "mongoose";

async function connect(){
  const uri = "mongodb+srv://gabrielstone:ilove123@cluster0.pxcfbrt.mongodb.net/?retryWrites=true&w=majority"
  return await mongoose.connect(uri)
}

export {connect};