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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUsers = exports.signInUsers = exports.getAllUsers = void 0;
const users_mongo_1 = __importDefault(require("./users-mongo"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_mongo_1.default.find({}, { __V: 0 });
});
exports.getAllUsers = getAllUsers;
//MODEL TO SIGN IN USERS
const signInUsers = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield users_mongo_1.default.findOne({ email });
    if (!foundUser) {
        return { message: "user not found", status: 404 };
    }
    else if (foundUser.password !== password) {
        return { message: "password is incorrect", status: 404 };
    }
    else {
        return { message: "logged in", status: 200, foundUser };
    }
});
exports.signInUsers = signInUsers;
//MODEL TO SIGN UP USERS
const signUpUsers = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield users_mongo_1.default.findOne({ email: user.email });
    if (foundUser) {
        return { message: 'User exists already, Login Instead', status: 422 };
    }
    let newUser = {
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.image,
        places: user.places,
    };
    yield users_mongo_1.default.create(newUser);
    return { message: 'user has been created successfuly', status: '200', newUser };
});
exports.signUpUsers = signUpUsers;
