import mongoose from "mongoose";

//MONGOOSE USERS SCHEMA
const schema: mongoose.Schema = new mongoose.Schema({
  mame: { required: true, type: String },
  email: {
    required: true,
    type: String,
    lowercase: true,
    trim: true
  },
  password: { required: true, min: 8, type:String },
  image: { required: true, type: String },
  places: { required: true, type: String },
});

//MONGOOSE USER MODELS
const userModel = mongoose.model("User", schema);

export default userModel;
