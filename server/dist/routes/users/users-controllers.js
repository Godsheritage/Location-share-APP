"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignupUsers = exports.httpLoginUsers = exports.httpGetUsers = void 0;
const users_models_1 = require("./../../models/User Models/users-models");
const express_validator_1 = require("express-validator");
const httpGetUsers = (req, res) => {
    return res.status(200).json((0, users_models_1.getAllUsers)());
};
exports.httpGetUsers = httpGetUsers;
const httpLoginUsers = (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    return res.status(200).json((0, users_models_1.signInUsers)(email, password));
};
exports.httpLoginUsers = httpLoginUsers;
const httpSignupUsers = (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        return res.status(400).json({ message: "mising credentials" });
    }
    return res.status(201).json((0, users_models_1.signUpUsers)(userName, email, password));
};
exports.httpSignupUsers = httpSignupUsers;
