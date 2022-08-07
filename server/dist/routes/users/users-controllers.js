"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignupUsers = exports.httpLoginUsers = exports.httpGetUsers = void 0;
const users_models_1 = require("./../../models/User Models/users-models");
const express_validator_1 = require("express-validator");
const httpGetUsers = (req, res) => {
    return res.status(200).json((0, users_models_1.getAllUsers)());
};
exports.httpGetUsers = httpGetUsers;
//controller to sign in users
const httpLoginUsers = (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    return res.status(200).json((0, users_models_1.signInUsers)(email, password));
};
exports.httpLoginUsers = httpLoginUsers;
//controller to sign up user
const httpSignupUsers = (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    return res.status(201).json((0, users_models_1.signUpUsers)(name, email, password));
};
exports.httpSignupUsers = httpSignupUsers;
