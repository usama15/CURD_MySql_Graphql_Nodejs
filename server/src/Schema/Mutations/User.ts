import { GraphQLString } from "graphql";
import { UsersType } from "../TypeDefs/User";
import { Users } from "../../Entities/User";


export const CREATE_USER = {
    type: UsersType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const {name,username, password} = args
        await Users.insert({name, username, password})
        
        return args
    }
}