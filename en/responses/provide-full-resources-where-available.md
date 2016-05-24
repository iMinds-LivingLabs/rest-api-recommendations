### Provide full resources where available

Provide the full resource representation (i.e. the object with all
attributes) whenever possible in the response. Always provide the full
resource on 200 and 201 responses, **including `PATCH` requests**, e.g.:

```
PATCH https://service.com/users/e52f94aa-f6b4-41eb-8d95-0192783d778c
Content-Type: application/json

{
  "email": "jd@example.com"
}
```

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=utf-8

{
    "data":{
        "id": "e52f94aa-f6b4-41eb-8d95-0192783d778c",
        "name": "John Doe",
        "email": "jd@example.com",
        "created_at": "2012-01-01T12:00:00Z",
        "updated_at": "2012-01-01T12:00:00Z",
        "type": "users"
    }
}
```


202 (i.e. asynchronous) responses will not include the full resource representation,

```
PATCH https://service.com/users/e52f94aa-f6b4-41eb-8d95-0192783d778c
Content-Type: application/json

{
  "email": "jd@example.com"
}
```

```
HTTP/1.1 202 Accepted
Content-Type: application/json;charset=utf-8

{
    "data":{
        "id": "e52f94aa-f6b4-41eb-8d95-0192783d778c",
        "type": "users"
    }
}
```
