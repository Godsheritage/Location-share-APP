import { RequestHandler } from "express";
import {
  getPlacesByPlaceId,
  getPlacesByUserId,
} from "../../models/places models/places-models";

//FETCH THE PLACES BY ID
export const httpFetchPlacesByPlaceId: RequestHandler = (req, res) => {
  const placeId: string = req.params.pid;
  const place = getPlacesByPlaceId(placeId);
  if (!place) {
    return res.status(404).json({ message: "could not find place" });
  }
  return res.status(200).json(place);
};

//to fetch the place by user ID
export const httpFetchPlacesByUserID: RequestHandler = (req, res) => {
  const userId = req.params.uid;
  const place = getPlacesByUserId(userId);
  if (!place) {
    return res.status(404).json({ message: "could not find place" });
  }
  return res.status(200).json(place);
};

export const httpCreatePlace: RequestHandler = (req, res) => {
  res.status(201).json({ message: "created" });
};
