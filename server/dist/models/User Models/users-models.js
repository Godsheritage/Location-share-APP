"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUsers = exports.signInUsers = exports.getAllUsers = void 0;
const users_mongo_1 = __importDefault(require("./users-mongo"));
const users = [
    {
        name: "Godsheritage Adeoye",
        email: "adeoyegodsheritage@gmail.com",
        password: "test12345",
    },
];
const getAllUsers = () => {
    return users;
};
exports.getAllUsers = getAllUsers;
//MODEL TO SIGN IN USERS
const signInUsers = (email, password) => {
    const foundUser = users_mongo_1.default.findOne({ email });
    // const foundUser = users.find((user:any) => user.email === email)
    if (!foundUser) {
        return { message: "user not found" };
    }
    else if (foundUser.password !== password) {
        return { message: "password is incorrect" };
    }
    else {
        return { message: "logged in", foundUser };
    }
};
exports.signInUsers = signInUsers;
//MODEL TO SIGN UP USERS
const signUpUsers = (name, email, password) => {
    const newUser = {
        name,
        email,
        password,
    };
    users.push(newUser);
    return { user: newUser };
};
exports.signUpUsers = signUpUsers;
