import ApiError from "../utills/api-error.js"
import { verifyToken } from "../utills/token-generate.js"
import asyncHandler from "./asyncHandler.js"


export const AuthMiddleware = asyncHandler(async(req, res, next) => {
    const token = req.cookies.token
    if(!token){
        throw ApiError.unauthorized("Token not exists")
    }
    const verify = await verifyToken(token)
    if(!verify){
        throw ApiError.unauthorized("Invalid Token")
    }

    req.user = verify
    next()



})