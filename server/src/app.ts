import express from "express";
import placesRoutes from "./routes/places/places-routes";
import userRoutes from "./routes/users/user-routes";
const app = express();

app.use('/api/places', placesRoutes)
app.use('/', userRoutes)

app.get("/test", (req, res) => {
    res.send("API WORKS")
})


export default app;
