"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetUsers = void 0;
const users_models_1 = require("./../../models/User Models/users-models");
const httpGetUsers = (req, res) => {
    return res.status(200).json((0, users_models_1.getAllUsers)());
};
exports.httpGetUsers = httpGetUsers;
