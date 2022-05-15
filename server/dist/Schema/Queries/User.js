"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_USERS = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const User_2 = require("../../Entities/User");
exports.GET_ALL_USERS = ({
    type: new graphql_1.GraphQLList(User_1.UsersType),
    resolve() {
        return User_2.Users.find();
    }
});
