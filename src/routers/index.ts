import express from 'express'
const router = express.Router()

import getDnsRecords from './getDnsRecords'
import account from './account'
import getAccounts from './getAccounts'
import getAllDomainsByAcc from './getAllDomainsByAcc'
import updateRecord from './updateRecord'

router.use('/cloudflare/api/getdnsrecords', getDnsRecords)
router.use('/cloudflare/api/account', account)
router.use('/cloudflare/api/getaccounts', getAccounts)
router.use('/cloudflare/api/getalldomains', getAllDomainsByAcc)
router.use('/cloudflare/api/updaterecord', updateRecord)

export default router
