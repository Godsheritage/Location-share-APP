import { RequestHandler } from "express";
import {
  getAllUsers,
  signInUsers,
  signUpUsers,
} from "./../../models/User Models/users-models";

export const httpGetUsers: RequestHandler = (req, res) => {
  return res.status(200).json(getAllUsers());
};


export const httpLoginUsers: RequestHandler = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ message: "mising credentials" });
  }
  return res.status(200).json(signInUsers(email, password));
};


export const httpSignupUsers: RequestHandler = (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({ message: "mising credentials" });
  }
  return res.status(201).json(signUpUsers(userName, email, password));
};
