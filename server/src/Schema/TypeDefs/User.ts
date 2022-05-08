import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const UsersType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})