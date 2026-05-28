import express from 'express';
import { loginUser, registerUser, updatePlan } from '../controllers/user.controller.js';

const route = express.Router()

route.post('/register', registerUser)
route.post('/login', loginUser)
route.get('/update-plan/:userId/:plan', updatePlan)

export default route