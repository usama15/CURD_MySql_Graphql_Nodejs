import { GraphQLID, GraphQLString } from "graphql";
import { UsersType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/User";


export const CREATE_USER = {
    type: UsersType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args
        await Users.insert({ name, username, password })

        return args
    }
}



export const UPDATE_PASSWORD = {
    type: UsersType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { id, oldPassword, newPassword } = args
        const user = await Users.findOne({ id: id })
        const userPassword = user?.password

        if (oldPassword == userPassword) {
            await Users.update({ id: id }, { password: newPassword })
        } else {
            throw new Error("Password does not match!")
        }

    }
}
export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const { id } = args
        await Users.delete(id)
        return{success: true, message: "Delete user"}
    }
}

