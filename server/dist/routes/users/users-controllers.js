"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSignupUsers = exports.httpLoginUsers = exports.httpGetUsers = void 0;
const users_models_1 = require("./../../models/User Models/users-models");
const express_validator_1 = require("express-validator");
const httpGetUsers = (req, res) => {
    return res.status(200).json((0, users_models_1.getAllUsers)());
};
exports.httpGetUsers = httpGetUsers;
// CONTROLLER TO SIGN IN USERS
const httpLoginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const signIn = yield (0, users_models_1.signInUsers)(email, password);
    return res.status(signIn.status).json(signIn);
});
exports.httpLoginUsers = httpLoginUsers;
// CONTROLLER TO SIGN UP USER
const httpSignupUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const signUp = yield (0, users_models_1.signUpUsers)(req.body);
    return res.status(signUp.status).json(signUp.message);
});
exports.httpSignupUsers = httpSignupUsers;
