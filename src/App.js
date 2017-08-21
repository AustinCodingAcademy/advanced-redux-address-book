import React from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import ListOfUsers from './components/ListOfUsers';

function App (props){
    return (
      <div>
        <ListOfUsers />
        <UserDetail />
      </div>
    );
}

export default App;
