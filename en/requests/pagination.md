#### Pagination
 
provide an `offset` (or `o`) parameter for specifying a position together with a `limit` (or `l`) query parameter, 
accepting an unary negative operator for counting back.

  * `GET /posts?cursor=8962596c-3f6d-482b-81a0-e62ca45aa4de&limit=30` - returns 30 posts 
  starting at the one with the specified uuid.
  * `GET /posts?o=39&l=-25` - returns 25 posts from position 14 (=39-25)
    
  When `limit` exceeds the number of available resources in the (sub-)collection, 
  all available resources matching the range will be returned
    
  * `GET /posts?offset=5&limit=-20` - returns 5 posts