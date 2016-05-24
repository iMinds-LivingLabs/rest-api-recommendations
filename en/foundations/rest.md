### RESTful maps CRUD operations to HTTP methods:

* `GET /collection` - retrieves a collection of resources (`GET /users`)
* `GET /collection/id` - retrieves a specific resource by `id` (`GET /users/42`)
* `POST /collection` - creates a resource (`POST /users`)
* `PUT /collection/id` - updates a resource _in full_ (`PUT /users/42`)
* `PATCH /collection/id` - updates a resource _partially_ (`PATCH /users/42`)
* `DELETE /collection/id` - deletes a resource (`DELETE /users/42`)

You should prefer `PATCH` over `PUT` (unless when it doesn't make sense).