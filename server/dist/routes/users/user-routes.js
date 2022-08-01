"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("./users-controllers");
const userRoutes = express_1.default.Router();
userRoutes.get('/', users_controllers_1.httpGetUsers);
userRoutes.post('/login', users_controllers_1.httpLoginUsers);
userRoutes.post('/signup', users_controllers_1.httpSignupUsers);
exports.default = userRoutes;
