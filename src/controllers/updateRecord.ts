import { Request, Response } from 'express'
import axios from 'axios'

const updateRecord = async (req: Request, res: Response) => {
  try {
    const { content, name, type, zoneId, id, key } = req.body

    console.log(req.body)

    const apiUrl = `${process.env.URL}/zones/${zoneId}/dns_records/${id}`

    const response = await axios.put(
      apiUrl,
      {
        content,
        name,
        type,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    )
    console.log('response', response)
    res.status(200).json(response.data.result)
  } catch (error) {
    console.error('Someting went wrong with updateRecord', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default updateRecord
