import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsersContainer from './containers/ListOfUsersContainer';
import SearchBox from './components/SearchBox';
import UserDetailContainer from './containers/UserDetailContainer';

function App (props){
    return (
      <div>
        <SearchBox />
        <ListOfUsersContainer />
        <UserDetailContainer />
      </div>
    );
}

export default App;
