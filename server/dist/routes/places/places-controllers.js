"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchPlacesByUserID = exports.httpFetchPlacesByPlaceId = void 0;
const places_models_1 = require("../../models/places models/places-models");
const httpFetchPlacesByPlaceId = (req, res) => {
    const placeId = req.params.pid;
    return res.status(200).json((0, places_models_1.getPlacesByPlaceId)(placeId));
};
exports.httpFetchPlacesByPlaceId = httpFetchPlacesByPlaceId;
const httpFetchPlacesByUserID = (req, res) => {
    const userId = req.params.id;
    res.send(200).json((0, places_models_1.getPlacesByUserId)(userId));
};
exports.httpFetchPlacesByUserID = httpFetchPlacesByUserID;
