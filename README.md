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
- do this for each data point in state

3. import reducers into store.js and pass them in as the first arg in createStore
```javascript
    import reducers from "./reducers/index"

    const store = createStore(reducers, state);  
``` 
### mapStateToProps
- instead of passing props from parent to child, we now only have to decide which parts of state we want to use as props for a component
1. outside of the react component, create a function mapStateToProps
    - pass in state
    - return an object containing the data neeeded from state
```javascript
    function mapStateToProps(state) {
        return {
            users: state.users
        }
    }
```

2. the react component and redux must now be connected
```javascript
    const ListOfUsersContainer = connect(mapStateToProps)(ListOfUsers);
    export default ListOfUsersContainer;
```

