#### Paths and attributes

Use downcased and dash-separated path names (i.e. kebab-case), for alignment with
hostnames, e.g:

```
service-api.com/users
service-api.com/app-setups
```

And for attribute names either use

* snake_case, i.e. underscore separators

    ```
    vehicle_type: "motorcycle"
    ```
or

* camelCase

    ```
    vehicleType: "motorcycle"
    ```
    
This allows using dot-notation (`transport.vehicleType`) in JS instead of array-notation (`transport["vehicle type"]`).

**Whichever you choose, be consistent.**
