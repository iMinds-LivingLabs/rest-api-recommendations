### Actions

#### Resource actions

Prefer endpoint layouts that don’t need any special actions for
individual resources. In cases where special actions are needed, place
them under a standard `actions` prefix, to clearly delineate them:

```
/resources/:resource/actions/:action
```

e.g.

```
/runs/1651790b-ba9f-4d40-8077-781b9e84b878/actions/stop
```

#### Global actions

If an action is not applied to a specific resource treat the action as a resource itself.

```
/search
```