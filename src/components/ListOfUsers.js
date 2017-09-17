import React, { Component } from 'react';
import { connect } from 'react-redux';
import {chooseUser} from "../actions";


class ListOfUsers extends Component {
  constructor(){
    super();
    this.state =  {visible:true};
  }
  render(){
    var buttonText = "Hide";
    var userDivs = "";
    if(this.state.visible){
      buttonText = "Hide";
      const filterUsers = this.props.users.filter((u) => {
        return u.firstName.indexOf(this.props.searchText) > -1;
      });
      userDivs = filterUsers.map((user) => {
        return <div>
            {user.firstName} - {user.lastName}
            <a href="#" onClick={
              (e)=>{
                e.preventDefault();
                this.props.chooseUser(user);
              }
            }> View </a>
        </div>
      });
    }else{
      buttonText = "Show";
      userDivs = "";
    }
    return (<div>
            <input onChange={
              (e) => {
                  this.props.searchText(e.target.value)
              }
            } />

            <button onClick={()=>{
                this.setState({
                  visible:!this.state.visible
                });
              }
            }>
              {buttonText}
            </button>
            {userDivs}
          </div>)
  }
}

function mapStateToProps(state){
  return {
    users: state.users,
    searchText: state.searchText
  }
}

function mapDispatchToProps(dispatch){
  return {
    chooseUser:function(user){
      dispatch(chooseUser(user));
    }
  }
}

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);
// connects a fnc and calls another right away on line above 
export default ListOfUsersContainer
