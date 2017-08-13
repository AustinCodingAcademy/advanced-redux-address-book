import React from 'react';
import {connect} from 'react-redux';

function NumberOfUsersCounter (props){
    return (
       <div>
        <h3>This is how many users there are: {props.users.length}</h3>
      </div>
    );
}

const mapStateToProps = (state) => {
 return {
   users: state.users
 };
};

const NumberOfUsersCounterContainer = connect(mapStateToProps)(NumberOfUsersCounter);
export default NumberOfUsersCounterContainer
