import express from "express";
import {
  httpGetUsers,
  httpLoginUsers,
  httpSignupUsers,
} from "./users-controllers";
import { check } from "express-validator";

const userRoutes = express.Router();

userRoutes.get("/", httpGetUsers);
userRoutes.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 8 })],
  httpLoginUsers
);
userRoutes.post("/signup", httpSignupUsers);

export default userRoutes;
