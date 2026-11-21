import express from 'express'
import 'dotenv/config';
import cookieParser from 'cookie-parser'
import { connectDb } from './config/db.js'
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import authRouter from './routes/auth.routes.js';
import cors from 'cors'
import { env } from './config/env.js';
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: env.frontendUrl
    , credentials: true
}))
await connectDb()

// rooutes 
app.use("/api/auth", authRouter)


// notfound handelr  and error handler
app.use(notFoundHandler)
app.use(errorHandler)



export default app