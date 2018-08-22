import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
    name: string,
    nickname: string,
    contact: {
        phone: string,
        email: string
    },
    password: string
}

const userSchema = new mongoose.Schema({
    name: {type: String},
    nickname: {type: String},
    contact: {
        phone: {type: String},
        email: {type: String}
    },
    password: {type: String}
})

export const User = mongoose.model<User>('User', userSchema)