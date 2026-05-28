import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { globalErrorHandler } from './middleware/globalErrorhandler.middleware.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use(globalErrorHandler)

export default app