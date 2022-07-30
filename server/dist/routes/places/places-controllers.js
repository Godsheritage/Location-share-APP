"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchPlacesByUserID = exports.httpFetchPlacesByPlaceId = void 0;
const places_models_1 = require("../../models/places models/places-models");
//FETCH THE PLACES BY ID
const httpFetchPlacesByPlaceId = (req, res) => {
    const placeId = req.params.pid;
    const place = (0, places_models_1.getPlacesByPlaceId)(placeId);
    if (!place) {
        return res.status(404).json({ message: "could not find place" });
    }
    return res.status(200).json(place);
};
exports.httpFetchPlacesByPlaceId = httpFetchPlacesByPlaceId;
//to fetch the place by user ID
const httpFetchPlacesByUserID = (req, res) => {
    const userId = req.params.uid;
    const place = (0, places_models_1.getPlacesByUserId)(userId);
    if (!place) {
        return res.status(404).json({ message: "could not find place" });
    }
    return res.status(200).json(place);
};
exports.httpFetchPlacesByUserID = httpFetchPlacesByUserID;