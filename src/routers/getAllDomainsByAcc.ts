import express from 'express'

import getAllDomainsByAcc from '../controllers/getAllDomainsByAcc'
const getAllDomainsByAccRouter = express.Router()

getAllDomainsByAccRouter.post('/', getAllDomainsByAcc)

export default getAllDomainsByAccRouter
