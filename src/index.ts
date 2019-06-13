import axios from 'axios'

import { isValidAPIKey } from './isValidAPIKey'
import { statusToString } from './statusToString'

const API_URL = 'https://api.email-validator.net/api/verify'

const emailValidatorInstance = async (apiKey: string, email: string) => {
  const serializedMail = encodeURIComponent(email)
  const url = `${API_URL}?EmailAddress=${serializedMail}&APIKey=${apiKey}`

  const { data } = await axios.get(url)
  const statusCode = data.status

  return {
    apiKey,
    email,
    fullResponse: data,
    statusCode,
    statusString: statusToString(statusCode),
  }
}

export default (apiKey: string) => {
  if (!isValidAPIKey(apiKey)) {
    throw new Error('No valid API Key!')
  }
  return (email: string) => emailValidatorInstance(apiKey, email)
}
