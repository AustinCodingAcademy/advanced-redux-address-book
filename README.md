# REDUX, YO
### State
- Used to hold data for entire app
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
### Store
- Where state is held
1. create store.js in /src
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
### Reducers
- functions specific to each piece of data used for retrieval and editing their assigned data...piece
1. create reducers in /src/reducers/index.js
```javascript
    import {combineReducers} from 'redux';

    const rootReducer = combineReducers({
        users, currentUser, searchText
    });
    export default rootReducers;
```
###### Note: don't worry about understanding root reducers for now, just understand we need them

2. create functions
    - function name must be the same as the state value it retrieves and edits
    - pass in state and action, where state's default value is whatever it is susupposed to be
```javascript
    import {combineReducers} from 'redux';

    function users(state = [], action) {

    }

    const rootReducer = combineReducers({
        users, currentUser, searchText
    });

```

3. 

