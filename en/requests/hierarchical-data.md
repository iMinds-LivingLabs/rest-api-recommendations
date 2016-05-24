### Hierarchical data

If you want to allow API consumers to request resources hierarchically, i.e. filter by relationship, 
expose them as sub-collections of the main collection entry point.

E.g.

* `GET /users/42/posts` - retrieve all posts for user with id `42`
* `GET /posts/983/comments` - retrieve all comments for post with id `983`

This allows you to express a relationships in a different way than it is implemented, i.e. it might be useful for linkbacks.
E.g. `posts` tend to have an `author` field which references `users`, but not the other way round.
This can be expressed through the use of subcollections, as in the examples above.

However, you _should_ [minimize path nesting](minimize-path-nesting.md)
