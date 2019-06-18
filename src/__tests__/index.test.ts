import EmailValidator from '..'
import { statusToString } from '../statusToString'

const { WORKING_APIKEY } = process.env
const EMAIL = 'janek.rahrt@icloud.com'

if (WORKING_APIKEY === undefined) {
  throw Error(
    `'WORKING_APIKEY' needs to be provided using environment variables`,
  )
}

test('Create instance of EmailValidator', () => {
  expect(() => EmailValidator('')).toThrow()

  expect(EmailValidator(WORKING_APIKEY)).toBeInstanceOf(Function)
})

test('Use instance to check eMails', async () => {
  const instance = EmailValidator(WORKING_APIKEY)
  const call = instance(EMAIL)

  expect(call).toBeInstanceOf(Promise)

  const response = await call

  expect(response).toMatchObject({
    apiKey: WORKING_APIKEY,
    email: EMAIL,
    statusCode: 200,
    statusString: statusToString(200),
  })
})
