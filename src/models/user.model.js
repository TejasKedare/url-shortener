import mongoose from "mongoose";
import { PlanConstants, UserConstants } from "../constants/user.constants.js";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: Object.keys(UserConstants),
        default: UserConstants.USER
    },

    plan: {
        type: String,
        enum: Object.keys(PlanConstants),
        default: PlanConstants.FREE
    },

    firstName: {
        type: String,
        required: false
    },

    lastName: {
        type: String,
        required: false
    },

    isEmailVerified: {
        type: Boolean
    },

    linksLeft: {
        type: Number,
        default: 5
    },

}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)