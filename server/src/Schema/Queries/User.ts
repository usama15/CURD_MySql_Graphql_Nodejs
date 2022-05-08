import { GraphQLList } from 'graphql'
import { UsersType } from '../TypeDefs/User'
import {Users} from '../../Entities/User'
export const GET_ALL_USERS = ({
    type: new GraphQLList(UsersType),
    resolve() {
        return Users.find();
    }
})