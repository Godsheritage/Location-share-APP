"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const places_controllers_1 = require("./places-controllers");
const express_validator_1 = require("express-validator");
const placesRoutes = express_1.default.Router();
placesRoutes.post("/", [
    (0, express_validator_1.check)("description").isLength({ min: 8 }),
    (0, express_validator_1.check)("address").not().isEmpty(),
    (0, express_validator_1.check)("title").not().isEmpty(),
    (0, express_validator_1.check)("creator").not().isEmpty(),
], places_controllers_1.httpCreatePlace);
placesRoutes.get("/user/:uid", places_controllers_1.httpFetchPlacesByUserID);
placesRoutes.get("/:pid", places_controllers_1.httpFetchPlacesByPlaceId);
placesRoutes.patch("/:pid", [(0, express_validator_1.check)("title").not().isEmpty(), (0, express_validator_1.check)("description").isLength({ min: 8 })], places_controllers_1.httpEditPlace);
placesRoutes.delete("/:pid", places_controllers_1.httpDeletePlace);
exports.default = placesRoutes;
