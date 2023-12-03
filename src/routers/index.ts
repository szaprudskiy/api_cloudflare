import express from 'express'
const router = express.Router()

const getDnsRecords = require('./getDnsRecords')

router.use('/api/getdnsrecords', getDnsRecords)

module.exports = router
