import {createStore} from 'redux';
import state from "./store";

const store = createStore(function(){}, state);

export default store;
