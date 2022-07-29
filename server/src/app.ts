import express from "express";
import placesRoutes from "./routes/places-routes";
import userRoutes from "./routes/user-routes";
const app = express();

app.use('/', placesRoutes)
app.use('/', userRoutes)



export default app;
