import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: String,
  description: String,
  address: String,
  image: String,
  location: { lat: Number, lng: Number },
  title: String,
  creator: String,
});

const places = mongoose.model('place', schema) 

export default places