import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const shortenUrl = asyncHandler(async (req, res) => {
    const { url } = req.body
    const receivedUrl = new URL(url)

    if (!receivedUrl.href) {
        return res.status(400).json({
            success: false,
            message: "Invalid Url String"
        })
    }

    const shortId = nanoid(6)

    const newUrl = await Url.create({
        originalUrl: receivedUrl.href,
        shortCode: shortId,
    })

    if (newUrl.shortCode) {
        return res.status(201).json({
            success: true,
            data: { url: `${process.env.REDIRECTION_URL}/${newUrl.shortCode}` },
            message: "Your Url is Shortened"
        })
    }
})

const redirectUrl = asyncHandler(async (req, res) => {
    const { shortCode } = req.params

    if (!shortCode) {
        return res.status(400).json({
            success: false,
            message: "Invalid Url"
        })
    }

    const url = await Url.findOneAndUpdate(
        { shortCode },
        { $inc: { clicks: 1 } },
        { new: true }
    )

    return res.redirect(302, url.originalUrl)
})

export { shortenUrl, redirectUrl }