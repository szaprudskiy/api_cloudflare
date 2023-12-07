import { Request, Response } from 'express'
import AccountModel from '../models/account.model'

const account = async (req: Request, res: Response) => {
  try {
    const accountDataArray: FormData[] = req.body

    console.log('accountDataArray', accountDataArray)
    const addedAccounts = await AccountModel.create(accountDataArray)

    res.status(201).json(addedAccounts)
  } catch (error) {
    console.error('Ошибка при добавлении аккаунтов:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default account
