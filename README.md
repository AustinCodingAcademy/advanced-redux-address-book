# REDUX, YO
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
2. create store.js
```javascript
import {createStore} from 'redux';

import state from "./state";

var store = createStore(function(){}, state);

export default store;
```

