import EmailValidator from '..'
import { statusToString } from '../statusToString'

const WORKING_APIKEY = 'ev-e7160cb71e8db0e574de5e8a4d914d61'
const EMAIL119 = 'janek.rahrt@icloud.com'

test('Create instance of EmailValidator', () => {
  expect(() => EmailValidator('')).toThrow()

  expect(EmailValidator(WORKING_APIKEY)).toBeInstanceOf(Function)
})

test('Use instance to check eMails', async () => {
  const instance = EmailValidator(WORKING_APIKEY)
  const call = instance(EMAIL119)

  expect(call).toBeInstanceOf(Promise)
  expect(call).resolves.toMatchObject({
    apiKey: WORKING_APIKEY,
    email: EMAIL119,
    statusCode: 119,
    statusString: statusToString(119),
  })
})
