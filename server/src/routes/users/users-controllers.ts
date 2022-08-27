import { RequestHandler } from "express";
import {
  getAllUsers,
  signInUsers,
  signUpUsers,
} from "./../../models/User Models/users-models";
import { validationResult } from "express-validator";

export const httpGetUsers: RequestHandler = (req, res) => {
  return res.status(200).json(getAllUsers());
};

//controller to sign in users
export const httpLoginUsers: RequestHandler = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  return res.status(200).json(signInUsers(email, password));
};

//controller to sign up user
export const httpSignupUsers: RequestHandler = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // const { name, email, password, image, places } = req.body;
 
  return res.status(201).json(signUpUsers(req.body));
};
