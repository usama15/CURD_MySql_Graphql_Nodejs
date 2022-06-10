import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql'

export const UsersType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        success: {type: GraphQLBoolean},
        message: {type: GraphQLString},
        token: {type: GraphQLString}
    })
})