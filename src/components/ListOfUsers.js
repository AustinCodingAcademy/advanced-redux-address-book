import React, { Component } from 'react';
import {connect} from 'react-redux';
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
      userDivs = this.props.users.map((user, i) => {
        return (
          <div key={i}>
            {user.firstName} - {user.lastName}
            <a href="#" onClick={
              (e)=>{
                e.preventDefault();
                this.props.chooseUser(user);
              }
            }> View </a>
          </div>
        );
      });
    }else{
      buttonText = "Show";
      userDivs = "";
    }
    return (<div>
            <input onChange={
              (e) => {
                  this.props.filterUsers(e.target.value)
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    chooseUser: function(user) {
      dispatch(chooseUser(user))
    }
  };
}

const ListOfUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
export default ListOfUsersContainer
