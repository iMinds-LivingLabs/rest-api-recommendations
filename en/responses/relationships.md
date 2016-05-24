#### Relationships

Never populate relationships inline, but provide them in an `included` array: 

```json
{
  "data": {
    "title": "My first post",
    "body": "Yeah, this is my first post!",
    "author": "e52f94aa-f6b4-41eb-8d95-0192783d778c",
    "type": "posts"
  },
  "included": [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "type": "users"
    }
  ]
}
```

Self-referencing collections obviously need not include the resource objects a second time in `included`:

```json
{
  "data": [{
    "id": "95a66e14-43eb-4850-b643-7ad7915c5e6b",
    "title": "Inbox",
    "type": "label"
  }, {
    "title": "FYI",
    "type": "label",
    "parent": "95a66e14-43eb-4850-b643-7ad7915c5e6b"
  }]
}
```
