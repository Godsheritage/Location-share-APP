import { RequestHandler } from "express";
import {
  getPlacesByPlaceId,
  getPlacesByUserId,
} from "../../models/places models/places-models";

export const httpFetchPlacesByPlaceId: RequestHandler = (req, res) => {
  const placeId: string = req.params.pid;
  return res.status(200).json(getPlacesByPlaceId(placeId));
};

export const httpFetchPlacesByUserID: RequestHandler = (req, res) => {
  const userId = req.params.id;
  res.send(200).json(getPlacesByUserId(userId));
};
