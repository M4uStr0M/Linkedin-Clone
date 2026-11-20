import mongoose from "mongoose";
import { env } from './env.js'


export async function connectDb() {
    try {
        await mongoose.connect(env.mongoUri)
        console.log("Db connect successfully")
    } catch (error) {
        console.log(`Db cannot connect due to ${error}`)
    }

}

