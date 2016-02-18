var unirest = require('unirest');
var hookUrl = "https://api.email-validator.net/api/verify";

module.exports = function(apikey) {
  if (!isValidAPIKey(apikey)) {
    throw new Error("No valid API Key!");
  }
  return function(email, cb){
    var url = hookUrl +"?"+
    "EmailAddress="+email+
    "&APIKey="+apikey;
    unirest.get(url).end(function (response) {
      var status = response.status;
      cb({
        getAPIKey: function() {
          return apikey;
        },
        getEmail: function() {
          return email;
        },
        statusCode: function() {
          return status;
        }
      });
    });
  }
}

function isValidAPIKey(apikey) {
  if (apikey.substring(0, 3) == "ev-") {
    var regex = /^[a-f0-9]{32}$/g;
    return regex.test(apikey.substring(3));
  } else {
    return false;
  }
}
