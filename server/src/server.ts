import http from "http";
import app from "./app";
import mongoose from "mongoose";

let MOGO_URL = '2'
const server = http.createServer(app);

const port = process.env.PORT || 1234;

mongoose.connection.once("open", () => {
  console.log("Mongodb connection is ready");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});


server.listen(port, async () => {
  await mongoose.connect(MOGO_URL);  

  console.log(`app is listening on port ${port}...`);
});
