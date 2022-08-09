import { editPlaces } from "./../../models/places models/places-models";
import { RequestHandler } from "express";
import {
  deletePlaces,
  getPlacesByPlaceId,
  getPlacesByUserId,
  createPlaces,
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
  if (!place || place.length === 0) {
    return res.status(404).json({ message: "could not find place" });
  }
  return res.status(200).json(place);
};

//to create a new place
export const httpCreatePlace: RequestHandler = (req, res) => {
  const {
    id,
    description,
    address,
    image,
    location: { lat, lng },
    title,
    creator,
  } = req.body;
  createPlaces(req.body);
  return res.status(201).json({ message: "created" });
};

//to edit a place
export const httpEditPlace: RequestHandler = (req, res) => {
  const placeId = req.params.pid;
  const { title, description } = req.body;
  editPlaces(placeId, title, description);
  return res.status(200).json({ message: "edited" });
};

//to delete a place
export const httpDeletePlace: RequestHandler = (req, res) => {
  const placeId = req.params.pid;
  return res.status(200).json(deletePlaces(placeId));
};
