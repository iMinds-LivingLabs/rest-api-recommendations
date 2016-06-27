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
      "id": "e52f94aa-f6b4-41eb-8d95-0192783d778c",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "type": "users"
    }
  ]
}
```

This is a cleaner approach than having them inline, since it:

* improves readability
* adds flexibility, when
    * parsing
    * redeclaring relationships
    * caching
    * populating (the response can be constructed in multiple steps throughout the application)
* improves separation of concerns, when
    * parsing (every type its own parser; then boundaries are more clear)
    * populating
* improves ease-of-use for complex, hierarchical relationship structures
* avoids duplication (e.g. when two separate objects refer to the same object)    

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

When included resource objects have populated relationships of themselves,
 these should be included in the top-level `included` array too

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
      "id": "e52f94aa-f6b4-41eb-8d95-0192783d778c",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "group": "94566039-106e-49b0-89f1-3eced15b4c16",
      "type": "users"
    },
    {
      "id": "94566039-106e-49b0-89f1-3eced15b4c16",
      "title": "Contributors",
      "type": "groups"
    }
  ]
}
```

`data` is strictly preserved for the requested resource, 
i.e. it's `type` should _always_ match the collection name the request was issued upon.
E.g. above would only be returned by requests to `/posts`, `/user/:id/posts` etc.

`included` is preserved for any resource objects (i.e. part of the domain) that weren't requested directly, 
but are included for optimisation reasons: fewer requests, speed, duplication prevention, etc.
