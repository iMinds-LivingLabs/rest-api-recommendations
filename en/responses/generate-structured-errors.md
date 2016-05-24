### Generate structured errors

Generate consistent, structured response bodies on errors. Include a
machine-readable error `code`, a human-readable error `message`, and
optionally a `url` pointing the client to further information about the
error and how to resolve it, e.g.:

```
HTTP/1.1 429 Too Many Requests
```

```json
{
  "code": "rate_limit",
  "message": "Account reached its API rate limit.",
  "url": "https://docs.service.com/rate-limits",
  "type": "error"
}
```

Document your error format and the possible error `code`s that clients may
encounter.

Always include a `"type": "error"` for consistency with other returned objects.

Validation errors will need an error breakdown, include these in an optional `errors` field:

```json
{
  "code": "validation_failed",
  "message": "Validation failed",
  "type": "error",
  "errors": [
    {
      "code": "invalid_characters",
      "message": "Name should not contain invalid characters",
      "field": "name"
    },
    {
      "code": "required",
      "message": "Password is required",
      "field": "password"
    }
  ]
}
```
