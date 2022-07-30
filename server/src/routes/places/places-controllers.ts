import { RequestHandler } from "express";
import { getPlaces } from "../../models/places models/places-models";

export const httpFetchPlaces: RequestHandler = (req, res) => {
  const placeId: string = req.params.pid;
  return res.status(200).json(getPlaces(placeId));
};

// export const httpFetchPlacesByUserID