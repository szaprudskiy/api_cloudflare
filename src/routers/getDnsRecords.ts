import express from 'express'

import getDnsRecords from '../controllers/getDnsRecords'
const getDnsRecordsRouter = express.Router()

getDnsRecordsRouter.post('/', getDnsRecords)

export default getDnsRecordsRouter
