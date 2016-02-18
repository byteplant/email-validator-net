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
        },
        statusString: function() {
          switch(status){
            case 114:
              return("Validation Delayed");
              break;
            case 118:
              return("Rate Limit Exceeded");
              break;
            case 119:
              return("API Key Invalid or Depleted");
              break;
            case 121:
              return("Task Accepted");
              break;
            case 200:
              return("OK - Valid Address");
              break;
            case 207:
              return("OK - Catch-All Active");
              break;
            case 215:
              return("OK - Catch-All Test Delayed");
              break;
            case 302:
              return("Local Address");
              break;
            case 303:
              return("IP Address Literal");
              break;
            case 305:
              return("Disposable Address");
              break;
            case 308:
              return("Role Address");
              break;
            case 313:
              return("Server Unavailable");
              break;
            case 314:
              return("Address Unavailable");
              break;
            case 316:
              return("Duplicate Address");
              break;
            case 317:
              return("Server Reject");
              break;
            case 401:
              return("Bad Address");
              break;
            case 404:
              return("Domain Not Fully Qualified");
              break;
            case 406:
              return("MX Lookup Error");
              break;
            case 409:
              return("No-Reply Address");
              break;
            case 410:
              return("Address Rejected");
              break;
            case 413:
              return("Server Unavailable");
              break;
            case 414:
              return("Address Unavailable");
              break;
            case 420:
              return("Domain Name Misspelled");
              break;
          }
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
