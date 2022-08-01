import { RequestHandler } from "express";
import { getAllUsers } from './../../models/User Models/users-models';



export const httpGetUsers: RequestHandler = (req, res) => {
  return res.status(200).json(getAllUsers());
};
