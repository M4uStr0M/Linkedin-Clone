import express from 'express'
import 'dotenv/config';
import { connectDb }  from './config/db.js'
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
const app = express()
await connectDb()

// rooutes 



// notfound handelr  and error handler
app.use(notFoundHandler)
app.use(errorHandler)



export default app