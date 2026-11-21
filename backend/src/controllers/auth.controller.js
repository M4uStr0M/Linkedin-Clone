import asyncHandler from '../middlewares/asyncHandler.js'
import User from '../models/user.model.js'
import ApiError from '../utills/api-error.js'
import ApiResponse from '../utills/api-response.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utills/token-generate.js'
import { env } from '../config/env.js'



const registerUser = asyncHandler(async (req, res) => {

    const { firstName, lastName, userName, email, password } = req.body
    const userNameExist = await User.findOne({ userName })
    if (userNameExist) {
        throw ApiError.conflict("Username already exists , Please enter diffrent username")
    }
    const userEmailExist = await User.findOne({ email })
    if (userEmailExist) {
        throw ApiError.conflict("Username already exists , Please enter diffrent email")
    }


    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password: hashPassword
    })

    const userResponse = user.toObject()
    delete userResponse.password
    delete userResponse.createdAt
    delete userResponse.updatedAt
    delete userResponse.__v

    ApiResponse.created(res, "Registration successfull", userResponse)

})



const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const existUser = await User.findOne({ email }).select("+password")
    if (!existUser) {
        throw ApiError.conflict("User not exist , Please register")
    }

    const comparePassword = await bcrypt.compare(password, existUser.password)

    if (!comparePassword) {
        throw ApiError.conflict("Incorrect Password")
    }



    const token = await generateToken({
        id: existUser._id,
        email: existUser.email
    })
    res.cookie("token", token, {
        httpOnly: true,
        secure: env.node_env === "PRODUCTION",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    const userResponse = existUser.toObject()
    delete userResponse.password
    delete userResponse.createdAt
    delete userResponse.updatedAt
    delete userResponse.__v



    ApiResponse.ok(res, "Login Successfully", userResponse)


})




const getUser = asyncHandler(async (req, res) => {
    const { id } = req.user

    const user = await User.findById(id)
    const userResponse = user.toObject()
    delete userResponse.password
    delete userResponse.createdAt
    delete userResponse.updatedAt
    delete userResponse.__v


    ApiResponse.ok(res, "User fetch succesfully", userResponse)



})







export {
    registerUser,
    loginUser,
    getUser
}