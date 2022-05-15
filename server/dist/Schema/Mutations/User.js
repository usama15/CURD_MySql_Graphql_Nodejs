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
exports.DELETE_USER = exports.UPDATE_PASSWORD = exports.CREATE_USER = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const Messages_1 = require("../TypeDefs/Messages");
const User_2 = require("../../Entities/User");
exports.CREATE_USER = {
    type: User_1.UsersType,
    args: {
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, username, password } = args;
            yield User_2.Users.insert({ name, username, password });
            return args;
        });
    }
};
exports.UPDATE_PASSWORD = {
    type: User_1.UsersType,
    args: {
        username: { type: graphql_1.GraphQLString },
        oldPassword: { type: graphql_1.GraphQLString },
        newPassword: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, oldPassword, newPassword } = args;
            const user = yield User_2.Users.findOne({ username: username });
            const userPassword = user === null || user === void 0 ? void 0 : user.password;
            if (oldPassword == userPassword) {
                yield User_2.Users.update({ username: username }, { password: newPassword });
            }
            else {
                throw new Error("Password does not match!");
            }
        });
    }
};
exports.DELETE_USER = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            yield User_2.Users.delete(id);
            return { success: true, message: "Delete user" };
        });
    }
};
