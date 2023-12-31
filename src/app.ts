import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routers/index'
const PORT = process.env.PORT || 4002
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: 'https://admin-cloudflare-szaprudskiy.vercel.app',
    credentials: true,
  })
)
app.use(router)

mongoose.connect(
  `mongodb+srv://sergeizaprudskiy:JIBXmXtLCOWMzaiO@cluster0.gev2o4t.mongodb.net/Cloudflare?retryWrites=true&w=majority`
)

mongoose.connection.on(
  'error',
  console.error.bind(console, 'Connection error:')
)
mongoose.connection.once('open', () => {
  console.log(`Connected to database ${process.env.DBNAME}`)
})

app.listen(PORT, () => {
  console.log(`The app listening on port ${PORT}`)
})
