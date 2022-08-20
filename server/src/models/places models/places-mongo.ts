import mongoose from "mongoose";

// MONGODB SCHEMA
const schema = new mongoose.Schema({
  id: { required: true, type: String },
  description: { required: true, type: String },
  address: { required: true, type: String },
  image: { required: true, type: String },
  location: { lat: Number, lng: Number },
  title: { required: true, type: String },
  creator: { required: true, type: String },
});

const places = mongoose.model("place", schema);

export default places;
