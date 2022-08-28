"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    mame: { required: true, type: String },
    email: {
        required: true,
        type: String,
        lowercase: true,
        trim: true
    },
    password: { required: true, min: 8, type: String },
    image: { required: true, type: String },
    places: { required: true, type: String },
});
const userModel = mongoose_1.default.model("User", schema);
exports.default = userModel;
