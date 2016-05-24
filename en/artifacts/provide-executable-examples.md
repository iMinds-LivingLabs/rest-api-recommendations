### Provide executable examples

Provide executable examples that users can type directly into their
terminals to see working API calls. To the greatest extent possible,
these examples should be usable verbatim, to minimize the amount of
work a user needs to do to try the API.

If you use [postman](https://www.getpostman.com/) to test/mock API requests 
you can let it generate various kinds of examples, e.g.

```
curl -X POST -H "Content-Type: application/json" -d '{
"email":"john.doe@example.com",
"password":"test"
}' "http://service.com/api/session"
```
