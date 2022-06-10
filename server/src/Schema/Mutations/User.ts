import { GraphQLID, GraphQLString } from "graphql";
import { UsersType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/User";
import Jwt from 'jsonwebtoken'
// var Jwt = require('jsonwebtoken');

export const CREATE_USER = {
    type: UsersType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args
        await Users.insert({ name, username, password, })

        return args
    }
}

const generateToken = (id: any) => {
    return Jwt.sign({ id }, "24742", {
        expiresIn: '30d',
    })
}

export const LOGIN_USER = {
    type: UsersType,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { username, password } = args
        const user = await Users.findOne({ username })
        if (user && password == user.password) {
            return ({
                username: user.username,
                name: user.name,
                id: user.id,
                success: true, message: "User Login!",
                token: generateToken(user.id)
            })
        } else if (user && password !== user.password) {
            return ({ success: false, message: "Password does not match!" })
        }
        else {
            return ({ success: false, message: "User not found!" })
        }

    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { id, oldPassword, newPassword } = args
        const user = await Users.findOne({ id: id })
        if (!user) {
            throw new Error("User not found!")
        }

        const userPassword = user?.password

        if (oldPassword == userPassword) {
            await Users.update({ id: id }, { password: newPassword })
            return { success: true, message: "Password update" }
        } else {
            return { success: true, message: "Password does not match!" }
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
        const user = await Users.findOne({ id: id })
        if (user?.id == id) {
            await Users.delete(id)
            return { success: true, message: "Delete user" }
        } else {
            return { success: false, message: "User not found" }
        }
    }
}

