import mongoose from "mongoose"


export const connectToDb = async(url) => {
    try {
        return await mongoose.connect(url)
        console.log(`Successfully connected to db`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}