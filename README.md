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
2. using store in index.js
    1. create store.js
```javascript
import {createStore} from 'redux';

import state from "./state";

var store = createStore(function(){}, state);

export default store;
```
    2. import react-redux to link the two
```javascript
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
3. reducers
    - functions specific to each piece of
data used for retrieval and editing their assigned data...piece
    - create reducers in /src/reducers index.js
    - ```javascript
import {combineReducers} from 'redux';
```

