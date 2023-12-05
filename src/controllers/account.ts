import { Request, Response } from 'express'
import AccountModel from '../models/account.model'

const account = async (req: Request, res: Response) => {
  try {
    const accountDataArray: FormData[] = req.body

    const addedAccounts = await AccountModel.create(accountDataArray)

    console.log('accountDataArray', accountDataArray)
    res.status(201).json(addedAccounts)
  } catch (error) {
    console.error('Ошибка при добавлении аккаунтов1:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default account
