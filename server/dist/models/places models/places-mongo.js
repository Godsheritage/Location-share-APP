"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// MONGODB SCHEMA
const placeSchema = new mongoose_1.default.Schema({
    id: { required: true, type: String },
    description: { required: true, type: String },
    address: { required: true, type: String },
    image: { required: true, type: String },
    location: { lat: Number, lng: Number },
    title: { required: true, type: String },
    creator: { required: true, type: String },
});
const places = mongoose_1.default.model("Place", placeSchema);
exports.default = places;
