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

// console.log(MOGO_URL)

server.listen(port, async () => {
  await mongoose.connect(process.env.MONGO_URL!);  
  console.log(`app is listening on port ${port}...`);
});
