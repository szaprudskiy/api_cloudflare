import express from 'express'
const router = express.Router()

import getDnsRecords from './getDnsRecords'
import account from './account'
import getAccounts from './getAccounts'

router.use('/api/getdnsrecords', getDnsRecords)
router.use('/api/account', account)
router.use('/api/getaccounts', getAccounts)

export default router
