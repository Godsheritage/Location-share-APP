import { RequestHandler } from "express";
import { getAllUsers } from './../../models/User Models/users-models';



export const httpGetUsers: RequestHandler = (req, res) => {
  return res.status(200).json(getAllUsers());
};

export const httpLoginUsers:RequestHandler = (req, res) => {
    return res.status(200).json()
}

export const httpSignupUsers:RequestHandler = (req, res) => {
    return res.status(200).json()
}