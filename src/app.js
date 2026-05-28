import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { globalErrorHandler } from './middleware/globalErrorhandler.middleware.js';
import urlRoutes from './routes/url.route.js';
import userRoutes from './routes/user.route.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use(globalErrorHandler)

app.use("/", urlRoutes)
app.use("/auth", userRoutes)

export default app