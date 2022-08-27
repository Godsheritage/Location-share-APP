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

// CONTROLLER TO SIGN IN USERS
export const httpLoginUsers: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const signIn = await signInUsers(email, password);
  return res.status(signIn.status).json(signIn);
};

// CONTROLLER TO SIGN UP USER
export const httpSignupUsers: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const signUp = await signUpUsers(req.body);
  return res.status(signUp.status).json(signUp.message);
};
