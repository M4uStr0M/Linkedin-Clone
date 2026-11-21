

import express from 'express';
import { getUser, loginUser, registerUser } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { loginSchema, registerSchema } from '../validations/auth.validation.js';
import { AuthMiddleware } from '../middlewares/auth.middleware.js';


const authRouter = express.Router()

authRouter.post("/register", validate(registerSchema), registerUser)
authRouter.post("/login", validate(loginSchema), loginUser)
authRouter.get("/get-me", AuthMiddleware, getUser)




export default authRouter