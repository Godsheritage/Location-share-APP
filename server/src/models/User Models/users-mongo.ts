import mongoose from "mongoose";
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

const userModel = mongoose.model("User", schema);

export default userModel;
