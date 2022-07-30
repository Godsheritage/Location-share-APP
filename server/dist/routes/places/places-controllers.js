"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchPlaces = void 0;
const places_models_1 = require("../../models/places models/places-models");
const httpFetchPlaces = (req, res) => {
    const placeId = req.params.pid;
    return res.status(200).json((0, places_models_1.getPlaces)(placeId));
};
exports.httpFetchPlaces = httpFetchPlaces;
