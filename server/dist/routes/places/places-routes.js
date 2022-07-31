"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const places_controllers_1 = require("./places-controllers");
const placesRoutes = express_1.default.Router();
placesRoutes.get('/user/:uid', places_controllers_1.httpFetchPlacesByUserID);
placesRoutes.get('/:pid', places_controllers_1.httpFetchPlacesByPlaceId);
placesRoutes.post('/', places_controllers_1.httpCreatePlace);
exports.default = placesRoutes;
