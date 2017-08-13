import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import users from './users';
import store from "./store";
import {Provider} from "react-redux";

var currentUser  = null;

function chooseUser(user){
  currentUser = user;
  render();
}

function render(){
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
  );
}
currentUser = users[0];
render();
