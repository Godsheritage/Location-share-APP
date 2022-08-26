import { editPlaces } from "./../../models/places models/places-models";
import { RequestHandler } from "express";
import {
  deletePlaces,
  getPlacesByPlaceId,
  getPlacesByUserId,
  createPlaces,
} from "../../models/places models/places-models";
import { validationResult } from "express-validator";

//GET PLACES BY PLACE ID
export const httpFetchPlacesByPlaceId: RequestHandler = async (req, res) => {
  const placeId: string = req.params.pid;
  const place = await getPlacesByPlaceId(placeId);
  if (!place) {
    return res.status(404).json({ message: "could not find place" });
  }
  return res.status(200).json(place);
};

//FETCH PLACE BY USER ID
export const httpFetchPlacesByUserID: RequestHandler = (req, res) => {
  const userId = req.params.uid;
  const place = getPlacesByUserId(userId);
  if (!place) {
    return res.status(404).json({ message: "could not find place" });
  }
  return res.status(200).json({ message: "place found", place });
};

//CREATE A NEW PLACE 
export const httpCreatePlace: RequestHandler = (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array() });
  }
  createPlaces(req.body);
  return res.status(201).json({ message: "created" });
};

//EDIT A PLACE 
export const httpEditPlace: RequestHandler = (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array() });
  }
  const placeId = req.params.pid;
  const { title, description } = req.body;
  return res.status(200).json(editPlaces(placeId, title, description));
};

//DELETE A PLACE
export const httpDeletePlace: RequestHandler = (req, res) => {
  const placeId = req.params.pid;
  return res.status(200).json(deletePlaces(placeId));
};
