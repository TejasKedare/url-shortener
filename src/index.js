import dotenv from 'dotenv';
import app from "./app.js";
import { connectToDb } from "./config/db.config.js";

const PORT = process.env.PORT || 8080

dotenv.config()

app.get('/', (req, res) => {
    res.end('This is Url Shortener Api')
})


connectToDb(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`)
    })
}).catch((err) => {
    console.error("MongoDb connection error", err)
})
