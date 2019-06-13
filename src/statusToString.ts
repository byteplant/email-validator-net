export const statusToString = (status: number) => {
  switch (status) {
    case 114:
      return 'Validation Delayed'
    case 118:
      return 'Rate Limit Exceeded'
    case 119:
      return 'API Key Invalid or Depleted'
    case 121:
      return 'Task Accepted'
    case 200:
      return 'OK - Valid Address'
    case 207:
      return 'OK - Catch-All Active'
    case 215:
      return 'OK - Catch-All Test Delayed'
    case 302:
      return 'Local Address'
    case 303:
      return 'IP Address Literal'
    case 305:
      return 'Disposable Address'
    case 308:
      return 'Role Address'
    case 313:
      return 'Server Unavailable'
    case 314:
      return 'Address Unavailable'
    case 316:
      return 'Duplicate Address'
    case 317:
      return 'Server Reject'
    case 401:
      return 'Bad Address'
    case 404:
      return 'Domain Not Fully Qualified'
    case 406:
      return 'MX Lookup Error'
    case 409:
      return 'No-Reply Address'
    case 410:
      return 'Address Rejected'
    case 413:
      return 'Server Unavailable'
    case 414:
      return 'Address Unavailable'
    case 420:
      return 'Domain Name Misspelled'
    default:
      return 'Unknown Status Code'
  }
}
