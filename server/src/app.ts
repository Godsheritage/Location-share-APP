import express from "express";
import placesRoutes from "./routes/places/places-routes";
import userRoutes from "./routes/users/user-routes";
const app = express();


app.use(express.json())
app.use('/api/places', placesRoutes)
app.use('/', userRoutes)
app.use()

export default app;
