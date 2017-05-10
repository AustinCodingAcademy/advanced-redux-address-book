import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
function UserDetail (props){
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
    user:state.currentUser
  }
}

const UserDetailContainer = connect(mapStateToProps)(UserDetail);
export default UserDetailContainer
