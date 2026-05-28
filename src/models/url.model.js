import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        trim: true
    },
    shortCode: {
        type: String,
        trim: true
    },
    clicks: {
        type: Number,
    },
    createdAt: {
        type: Date,
        required: true,
    },
})

export const Url = mongoose.model("Url", urlSchema)