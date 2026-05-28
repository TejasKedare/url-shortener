import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        trim: true
    },
    shortCode: {
        type: String,
        trim: true,
        unique: true,
        index: true
    },
    clicks: {
        type: Number,
        default: 0
    }, 
    assignedTo : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

export const Url = mongoose.model("Url", urlSchema)