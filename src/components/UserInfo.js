import React from 'react';
import PhoneNumber from "./PhoneNumber";
import NumberOfUsers from "./NumberOfUsersCounter";

function UserInfo (props){
  var user = props.user;
    return (
       <div>
        <h3>{user.firstName} {user.lastName}</h3>
        <h4>{user.occupation}</h4>
        <PhoneNumber number={user.phone} />
        <p>
          {user.address}
        </p>
        <NumberOfUsers  />
      </div>
    );
}

export default UserInfo;
