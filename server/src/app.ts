import express from "express";
import placesRoutes from "./routes/places/places-routes";
import userRoutes from "./routes/users/user-routes";
const app = express();

app.use(express.json());
app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);
app.use((req, res) => {
  return res.status(404).json({ mesage: "could not find route" });
});

export default app;
