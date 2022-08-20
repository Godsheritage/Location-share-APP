"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// MONGODB SCHEMA
const schema = new mongoose_1.default.Schema({
    id: String,
    description: String,
    address: String,
    image: String,
    location: { lat: Number, lng: Number },
    title: String,
    creator: String,
});
const places = mongoose_1.default.model('place', schema);
exports.default = places;
