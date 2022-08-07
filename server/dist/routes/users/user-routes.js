"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("./users-controllers");
const express_validator_1 = require("express-validator");
const userRoutes = express_1.default.Router();
//get all users routes
userRoutes.get("/", users_controllers_1.httpGetUsers);
//add a new user route
userRoutes.post("/login", [(0, express_validator_1.check)("email").isEmail(), (0, express_validator_1.check)("password").isLength({ min: 8 })], users_controllers_1.httpLoginUsers);
//to post a new user 
userRoutes.post("/signup", users_controllers_1.httpSignupUsers);
exports.default = userRoutes;
