import express from "express";
import {
  httpGetUsers,
  httpLoginUsers,
  httpSignupUsers,
} from "./users-controllers"; 
import { check } from "express-validator";

const userRoutes = express.Router();

//get all users routes
userRoutes.get("/", httpGetUsers);


//to login
userRoutes.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 8 })],
  httpLoginUsers
);


//to add a new user 
userRoutes.post("/signup", httpSignupUsers);

export default userRoutes;
