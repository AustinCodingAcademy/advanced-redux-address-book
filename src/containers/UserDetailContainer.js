import React from 'react';
import { connect } from 'react-redux';
import UserDetail from "../components/UserDetail";

function mapStateToProps(state){
  return {
    user: state.currentUser
  }
}

const UserDetailContainer = connect(mapStateToProps)(UserDetail);
// connects a fnc and calls another right away on line above 
export default UserDetailContainer;