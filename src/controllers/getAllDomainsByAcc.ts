import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

interface ZoneListResponse {
  result: {
    id: string
  }[]
}

interface RecordResult {
  records: any[]
}

const getAllDomainsByAcc = async (req: Request, res: Response) => {
  try {
    const { keyId } = req.body
    // console.log('keyId', keyId)
    if (!keyId) {
      res.status(400).json({ error: 'Missing required parameters' })
    }
    const apiUrl = `https://api.cloudflare.com/client/v4/zones?per_page=500`

    const responseZoneList: AxiosResponse<ZoneListResponse> = await axios.get(
      apiUrl,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${keyId}`,
        },
      }
    )

    const zoneIdList = responseZoneList.data.result.map((zone) => zone.id)

    // console.log('zoneIdList', zoneIdList)

    const results: RecordResult[] = []

    for (const zoneId of zoneIdList) {
      console.log(`Fetching records for zone ${zoneId}`)
      const responseRecordList = await axios.get(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records?per_page=500`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${keyId}`,
          },
        }
      )
      // console.log('response', responseRecordList.data.result)
      results.push({ records: responseRecordList.data.result })
    }

    // console.log('results', results)
    res.status(200).json(results)
    //   console.log('zoneId', zoneId)
    //   console.log('responseRecordList', responseRecordList.data.result)

    //   for (const record of responseRecordList.data.result) {
    //     const { name, type } = record
    //     await axios.patch(
    //       `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records/${record.id}`,
    //       {
    //         content: '198.51.100.31',
    //         name,
    //         type,
    //       },
    //       {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Authorization: `Bearer ${keyId}`,
    //         },
    //       }
    //     )
    //   }
  } catch (error) {
    console.error('Someting went wrong with getDnsRecords', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
export default getAllDomainsByAcc
