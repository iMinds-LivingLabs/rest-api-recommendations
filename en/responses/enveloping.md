#### Enveloping

You should **always envelope your responses in an object**:

* to avoid a [vulnerability with JSON arrays](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
* allow uniform processing of responses

Resource objects should be exposed in `"data"`, either as an object whenever an operation on a single resource has occurred:

```
# retrieve a single user
GET /user/44228889-3f01-4ea6-9802-d3fe94f5ac8a
```
```json
{
  "data": {
    "id": "44228889-3f01-4ea6-9802-d3fe94f5ac8a",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "type": "users"
  }
}
```

Or as an array, when the operation concerns a collection. Even when it only consists out of one object:

```
# retrieve a list of all active users
GET /users?filter[active]
```
```json
{
  "data": [{
    "id": "44228889-3f01-4ea6-9802-d3fe94f5ac8a",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "type": "users"
  }]
}
```