### Allow Versioning in the URL

Once going public it's best to version your API. 
It's a polemic subject, but we think the most pragmatic solution is to allow versioning in the URL (instead of a header.)

Follow these rules of thumb:

* Only include the major version, e.g. `v1`
* Route unversioned URL's to the latest version

```sh
GET /api/v1/users/42
```