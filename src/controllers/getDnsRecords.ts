import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

import { Dns } from '../types/types'

const getDnsRecords = async (req: Request, res: Response) => {
  try {
    const { keyId, zoneId } = req.body
    console.log(req.body)
    if (!keyId || !zoneId) {
      res.status(400).json({ error: 'Missing required parameters' })
    }
    const apiUrl = `${process.env.URL}/zones/${zoneId}/dns_records`

    const response: AxiosResponse<{ result: Dns[] }> = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${keyId}`,
      },
    })
    res.status(200).json(response.data.result)
  } catch (error) {
    console.error('Someting went wrong with getDnsRecords', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default getDnsRecords
