import express from 'express'

import updateRecord from '../controllers/updateRecord'
const updateRecordRouter = express.Router()

updateRecordRouter.post('/', updateRecord)

export default updateRecordRouter
