import React from 'react';
import UserInfo from './UserInfo';
import { connect } from 'react-redux';

function UserDetail (props){
  console.log('test');
  var user = props.user;
    return (
       <div>
        <UserInfo user={user} />
        <img src={user.avatar} />
      </div>
    );
}

function mapStateToProps(state) {
  return {
    user: state.currentUser 
  }
}

const UserDetailContainer = connect(mapStateToProps)(UserDetail);
export default UserDetailContainer;
