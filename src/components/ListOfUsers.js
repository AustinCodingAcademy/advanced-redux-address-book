import React, { Component } from 'react';



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

export default ListOfUsers;
