import mongoose from 'mongoose'

interface Account {
  accountName: string
  accountKey: string
}

interface Domain {
  domainName: string
  domainId: string
}

interface AccountDocument extends mongoose.Document {
  account: Account
  domain: Domain
}

const accountSchema = new mongoose.Schema<AccountDocument>({
  account: {
    accountName: String,
    accountKey: String,
  },
  domain: {
    domainName: String,
    domainId: String,
  },
})

const AccountModel = mongoose.model<AccountDocument>('Account', accountSchema)

export default AccountModel
