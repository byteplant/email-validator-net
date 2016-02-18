email-validator-net
=========

A small library providing a wrapper for [api.email-validator.net](http://www.email-validator.net/email-address-online-verification-api.html) with unirest

## Installation
  ```shell
  npm install email-validator-net
  ```
## Usage
  ```js
  var emailValidator = require('email-validator-net')(apiKey);

  var email1 = addressValidator(email, callbackFunction(returnOfCallbackFunction){ //validates address object
    //email is a string like this: janek.rahrt@gipfel5.eu

    returnOfCallbackFunction.statusCode() //gives back statuscode
    // => http://www.email-validator.net/email-verification-results.html
  });
  ```

## Tests

  ```shell
  npm test
  ```

## Release History

* 0.1.0 Initial release
