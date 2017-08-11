import {createStore} from 'redux';
import state from "./state";

const store = createStore(function(){}, state);

export default store;
