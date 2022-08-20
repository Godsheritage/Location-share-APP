import mongoose from "mongoose";
const schema:mongoose.Schema = new mongoose.Schema({
  mame: { required: true, type: String },
  email: { required: true, type: String, lowercase: true, trim: true },
  password: { required: true, min: 8, type: "[A-Za-z0-9]g" },
});

const userModel = mongoose.model('user', schema) 

export default userModel