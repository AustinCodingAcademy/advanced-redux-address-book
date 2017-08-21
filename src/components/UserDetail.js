import React from 'react';
import UserInfo from './UserInfo';
//import { connect } from 'react-redux';

function UserDetail (props){
  var user = props.user;
    return (
       <div>
        <UserInfo user={user} />
        <img src={user.avatar} alt=""/>
      </div>
    );
}

//function mapStateToProps(state) {
//  return {
//    user: state.user
//  };
//}

export default UserDetail;

