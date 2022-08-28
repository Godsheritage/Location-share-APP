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
  return res.status(place.status).json(place);
};

//FETCH PLACE BY CREATOR ID
export const httpFetchPlacesByUserID: RequestHandler = async (req, res) => {
  const userId = req.params.uid;
  const place = await getPlacesByUserId(userId);
  return res.status(place.status).json(place);
};

//CREATE A NEW PLACE
export const httpCreatePlace: RequestHandler = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ message: error.array() });
  }
  let newPlace = await createPlaces(req.body);
  return res.status(newPlace.status).json({ message: newPlace.message });
};

//EDIT A PLACE
export const httpEditPlace: RequestHandler = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ message: error.array() });
  }
  const placeId = req.params.pid;
  const { title, description } = req.body;
  const edit = await editPlaces(placeId, title, description);
  return res.status(edit.status).json(edit.message);
};

//DELETE A PLACE
export const httpDeletePlace: RequestHandler = async (req, res) => {
  const placeId = req.params.pid;
  const deleted = await deletePlaces(placeId);
  return res.status(deleted.status).json(deleted);
};
