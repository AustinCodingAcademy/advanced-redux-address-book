import React from 'react';
import {connect} from 'react-redux';
import UserInfo from './UserInfo';

function UserDetail (props){
  var user = props.user;
    if(!user) {
      return <div></div>
    }
    return (
       <div>
        <UserInfo user={user} />
        <img src={user.avatar} alt={user.firstName} />
      </div>
    );
}

const mapStateToProps = (state) => {
 return {
   user: state.currentUser
 };
};

const UserDetailContainer = connect(mapStateToProps)(UserDetail);
export default UserDetailContainer
