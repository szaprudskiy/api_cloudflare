import express from 'express'

import getAccounts from '../controllers/getAccounts'
const getAccountsRouter = express.Router()

getAccountsRouter.get('/', getAccounts)

export default getAccountsRouter
