#### Sorting

use `sort` (or `s`) accepting a list of comma seperated field names (allowing to sort on multiple fields) 
with optional unary negative operator (for sort order)
    
    * `GET /users?s=name` - sorts on `name`-field
    * `GET /users?s=-stars,name` - sorts descendingly on `stars`, then ascendingly on `name`
