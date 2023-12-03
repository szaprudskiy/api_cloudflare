import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
const router = require('./routers/index')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

const PORT = process.env.PORT || 4002
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
