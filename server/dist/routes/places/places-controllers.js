"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeletePlace = exports.httpEditPlace = exports.httpCreatePlace = exports.httpFetchPlacesByUserID = exports.httpFetchPlacesByPlaceId = void 0;
const places_models_1 = require("./../../models/places models/places-models");
const places_models_2 = require("../../models/places models/places-models");
const express_validator_1 = require("express-validator");
//GET PLACES BY PLACE ID
const httpFetchPlacesByPlaceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const placeId = req.params.pid;
    const place = yield (0, places_models_2.getPlacesByPlaceId)(placeId);
    return res.status(place.status).json(place);
});
exports.httpFetchPlacesByPlaceId = httpFetchPlacesByPlaceId;
//FETCH PLACE BY CREATOR ID
const httpFetchPlacesByUserID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.uid;
    const place = yield (0, places_models_2.getPlacesByUserId)(userId);
    return res.status(place.status).json(place);
});
exports.httpFetchPlacesByUserID = httpFetchPlacesByUserID;
//CREATE A NEW PLACE
const httpCreatePlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ message: error.array() });
    }
    let newPlace = yield (0, places_models_2.createPlaces)(req.body);
    return res.status(newPlace.status).json({ message: newPlace === null || newPlace === void 0 ? void 0 : newPlace.message });
});
exports.httpCreatePlace = httpCreatePlace;
//EDIT A PLACE
const httpEditPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ message: error.array() });
    }
    const placeId = req.params.pid;
    const { title, description } = req.body;
    const edit = yield (0, places_models_1.editPlaces)(placeId, title, description);
    return res.status(edit.status).json(edit.message);
});
exports.httpEditPlace = httpEditPlace;
//DELETE A PLACE
const httpDeletePlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const placeId = req.params.pid;
    const deleted = yield (0, places_models_2.deletePlaces)(placeId);
    return res.status(deleted.status).json(deleted);
});
exports.httpDeletePlace = httpDeletePlace;
