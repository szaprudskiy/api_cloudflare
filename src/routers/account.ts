import express from 'express'

import account from '../controllers/account'
const accountRouter = express.Router()

accountRouter.post('/', account)

export default accountRouter
