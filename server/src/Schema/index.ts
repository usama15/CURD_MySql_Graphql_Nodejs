import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER, DELETE_USER, LOGIN_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { GET_ALL_USERS } from './Queries/User'
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})
const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updatePassword: UPDATE_PASSWORD,
        loginUser: LOGIN_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})