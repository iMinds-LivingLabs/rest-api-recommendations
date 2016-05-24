### Provide Request-Ids for Introspection

Include a `Request-Id` header in each API request (optionally) and response (mandatory), populated with a
UUID value. By logging these values on the client, server and any backing
services, it provides a mechanism to trace, diagnose and debug requests.

If no `Request-Id` was provided in the request the server should generate one for the response. 

#### Request

```
POST /api/user
Request-Id: d4391d8b-dfd0-4101-9ccf-75c53c2f8f47
```

#### Response

```
Request-Id: d4391d8b-dfd0-4101-9ccf-75c53c2f8f47
```
```json
{
    "data": {
        "name": {
            "first": "John",
            "last": "Doe"
        },
        "email": "john.doe@example.com",
        "type": "users"
    }
}
```