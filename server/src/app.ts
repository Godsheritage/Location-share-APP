import express from "express";
import placesRoutes from "./routes/places-routes";
import userRoutes from "./routes/user-routes";
const app = express();

app.use('/', placesRoutes)
app.use('/', userRoutes)

app.get("/test", (req, res) => {
    res.send("API WORKS")
})


export default app;
