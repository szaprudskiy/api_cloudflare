import express from 'express'
const router = express.Router()

import getDnsRecords from './getDnsRecords'
import account from './account'
import getAccounts from './getAccounts'
import updateRecord from './updateRecord'

router.use('/api/getdnsrecords', getDnsRecords)
router.use('/api/account', account)
router.use('/api/getaccounts', getAccounts)
router.use('/api/updaterecord', updateRecord)

export default router
