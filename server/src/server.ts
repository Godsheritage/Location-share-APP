import http from "http";
import app from "./app";

const server = http.createServer(app);

let port = process.env.PORT || 1234;

server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
