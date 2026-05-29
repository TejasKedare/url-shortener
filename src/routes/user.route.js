import express from 'express';
import { loginUser, registerUser, updatePlan, updateRole } from '../controllers/user.controller.js';

const route = express.Router()

route.post('/register', registerUser)
route.post('/login', loginUser)
route.post('/update-plan', updatePlan)
route.post('/update-role', updateRole)

export default route