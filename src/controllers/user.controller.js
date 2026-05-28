import { UserConstants } from "../constants/user.constants.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { User } from '../models/user.model.js';


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body

    if (!username || !email || !password) {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials",
        })
    }

    const user = await User.create({ username, email, password, role })

    return res.status(201).json({
        success: true,
        message: "User Created Successfully",
        data: { user: user }
    })
})

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials",
        })
    }

    const user = await User.findOne({ email })

    if (user.password != password) {
        return res.status(401).json({
            success: false,
            message: "Passwords dose not match",
        })
    }

    return res.status(200).json({
        success: true,
        message: "Login successful",
        data: { user: user }
    })

})

const updatePlan = asyncHandler(async (req, res) => {
    const { userId, plan } = req.params
    if (!userId) {
        return res.status(401).json({
            success: false,
            message: "Invalid userId",
        })
    }

    const user = await User.findByIdAndUpdate(userId, { plan: plan }, {new: true})

    return res.status(200).json({
        success: true,
        message: "Plan Updated Successfully",
        data: { user: user }
    })

})

export { registerUser, loginUser, updatePlan }