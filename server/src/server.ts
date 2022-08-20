import http from "http";
import app from "./app";
import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config()


// let MOGO_URL:string =
const server = http.createServer(app);
  
const port = process.env.PORT || 1234;

mongoose.connection.once("open", () => {
  console.log("Mongodb connection is ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// console.log(process.env)

server.listen(port, async () => {
  await mongoose.connect("mongodb+srv://Godsheritage:Godsheritage@Location.f2ufuyz.mongodb.net/?retryWrites=true&w=majority");  
  console.log(`app is listening on port ${port}...`);
});
