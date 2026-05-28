import express from 'express';
import { redirectUrl, shortenUrl } from '../controllers/url.controller.js';

const route = express.Router()

route.post('/shorten', shortenUrl)
route.get('/:shortCode', redirectUrl)

export default route