#REDUX, YO
1. create state.js in /src
```javascript
import users from "./users";

export default {
  users: users,
  filteredUsers: users,
  currentUser: users[0],
  searchText: ""
}
```
