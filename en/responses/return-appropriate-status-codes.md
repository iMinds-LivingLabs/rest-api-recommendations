### Return appropriate status codes

Return appropriate HTTP status codes with each response. Successful
responses should be coded according to this guide:

* `200 OK`: Request succeeded for a `GET` `PATCH` or `PUT` call that
  synchronously updated an existing resource
* `201 Created`: Request succeeded for a `POST` call that completed
  synchronously
* `202 Accepted`: Request accepted for a `POST`, `PUT`, `DELETE`, or `PATCH` call that
  will be processed asynchronously
* `204 No Content`: Request accepted for a `DELETE` call that synchronously removed an existing resource.  
* `206 Partial Content`: Request succeeded on `GET`, but only a partial response
  returned: see [filtering](../requests/filtering.md)

Pay attention to the use of authentication and authorization error codes:

* `401 Unauthorized`: Request failed because user is not authenticated
* `403 Forbidden`: Request failed because user does not have authorization to access a specific resource

Return suitable codes to provide additional information when there are errors:

* `400 Bad Request`: Your request could not be understood, due to e.g. malformed json
* `404 Not Found`: Resource wasn't found
* `422 Unprocessable Entity`: Your request was understood, but contained invalid parameters
* `429 Too Many Requests`: You have been rate-limited, retry later
* `500 Internal Server Error`: Something went wrong on the server, check status site and/or report the issue

Refer to the [HTTP response code spec](https://tools.ietf.org/html/rfc7231#section-6)
for guidance on status codes for user error and server error cases.
