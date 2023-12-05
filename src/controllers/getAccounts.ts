import AccountModel from '../models/account.model'
import { Response, Request } from 'express'

const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await AccountModel.find()
    res.status(200).json(accounts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default getAccounts
