"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeletePlace = exports.httpEditPlace = exports.httpCreatePlace = exports.httpFetchPlacesByUserID = exports.httpFetchPlacesByPlaceId = void 0;
const places_models_1 = require("./../../models/places models/places-models");
const places_models_2 = require("../../models/places models/places-models");
const express_validator_1 = require("express-validator");
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
    if (!place || place.length === 0) {
        return res.status(404).json({ message: "could not find place" });
    }
    return res.status(200).json(place);
};
exports.httpFetchPlacesByUserID = httpFetchPlacesByUserID;
//to create a new place
const httpCreatePlace = (req, res) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ error: error.array() });
    }
    (0, places_models_2.createPlaces)(req.body);
    return res.status(201).json({ message: "created" });
};
exports.httpCreatePlace = httpCreatePlace;
//to edit a place
const httpEditPlace = (req, res) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ error: error.array() });
    }
    const placeId = req.params.pid;
    const { title, description } = req.body;
    (0, places_models_1.editPlaces)(placeId, title, description);
    return res.status(200).json({ message: "edited" });
};
exports.httpEditPlace = httpEditPlace;
//to delete a place
const httpDeletePlace = (req, res) => {
    const placeId = req.params.pid;
    return res.status(200).json((0, places_models_2.deletePlaces)(placeId));
};
exports.httpDeletePlace = httpDeletePlace;
