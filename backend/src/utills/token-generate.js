
import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export const generateToken = async (data) => {
    try {
        return jwt.sign(data, env.jwtSecret, {
            expiresIn: "7d"
        }
        )
    } catch (er) {
        return null
    }
}



export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, env.jwtSecret)
    } catch (err) {
        return null
    }
}