"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_1 = require("./Mutations/User");
const User_2 = require("./Queries/User");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: User_2.GET_ALL_USERS
    }
});
const RootMutation = new graphql_1.GraphQLObjectType({
    name: "RootMutation",
    fields: {
        createUser: User_1.CREATE_USER,
        deleteUser: User_1.DELETE_USER,
        updatePassword: User_1.UPDATE_PASSWORD
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
