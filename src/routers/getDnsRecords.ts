const express = require('express')
const getDnsRecords = require('../controllers/getDnsRecords')
const getDnsRecordsRouter = express.Router()

getDnsRecordsRouter.post('/', getDnsRecords)

module.exports = getDnsRecordsRouter
