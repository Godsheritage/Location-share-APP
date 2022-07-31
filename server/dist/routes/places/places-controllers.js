"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeletePlace = exports.httpEditPlace = exports.httpCreatePlace = exports.httpFetchPlacesByUserID = exports.httpFetchPlacesByPlaceId = void 0;
const places_models_1 = require("./../../models/places models/places-models");
const places_models_2 = require("../../models/places models/places-models");
//FETCH THE PLACES BY ID
const httpFetchPlacesByPlaceId = (req, res) => {
    const placeId = req.params.pid;
    const place = (0, places_models_2.getPlacesByPlaceId)(placeId);
    if (!place) {
        return res.status(404).json({ message: "could not find place" });
    }
    return res.status(200).json(place);
};
exports.httpFetchPlacesByPlaceId = httpFetchPlacesByPlaceId;
//to fetch the place by user ID
const httpFetchPlacesByUserID = (req, res) => {
    const userId = req.params.uid;
    const place = (0, places_models_2.getPlacesByUserId)(userId);
    if (!place) {
        return res.status(404).json({ message: "could not find place" });
    }
    return res.status(200).json(place);
};
exports.httpFetchPlacesByUserID = httpFetchPlacesByUserID;
const httpCreatePlace = (req, res) => {
    (0, places_models_2.createPlaces)(req.body);
    return res.status(201).json({ message: "created" });
};
exports.httpCreatePlace = httpCreatePlace;
const httpEditPlace = (req, res) => {
    const placeId = req.params.pid;
    const placeBody = req.body;
    (0, places_models_1.editPlaces)(placeId, placeBody);
    return res.status(200).json({ message: "edited" });
};
exports.httpEditPlace = httpEditPlace;
const httpDeletePlace = (req, res) => {
    const placeId = req.params.pid;
    return res.status(200).json((0, places_models_2.deletePlaces)(placeId));
};
exports.httpDeletePlace = httpDeletePlace;
