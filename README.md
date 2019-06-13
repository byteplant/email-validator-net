# email-validator-net

A small library providing a wrapper for [api.email-validator.net](http://www.email-validator.net/email-address-online-verification-api.html)

## Installation

```shell
npm install email-validator-net
# or
yarn add email-validator-net
```

## Usage

ES6 or TypeScript usage:

```js
import EmailValidator from 'email-validator-net'

// YOUR_API_KEY is a string
const validatorInstance = EmailValidator(YOUR_API_KEY)

// validatorInstance is a function and takes one argument
// argument must be a string
// validatorInstance returns a promise
const responseObject = await validatorInstance(EMAIL_TO_VALIDATE) // EMAIL_TO_VALIDATE is a string

// responseObject looks like this:
// {
//   apiKey,        // used apikey
//   email,         // validated email address
//   statusCode,    // statusCode of the service
//                  // => http://www.email-validator.net/email-verification-results.html
//   statusString,  // status as string
//   fullResponse,  // object with the full response from the service
// }
```

## Tests

```shell
yarn test
```

## Release History

- 2.0.0 Rewrite in Typescript and using Promises
- 0.1.0 Initial release
