import { connect } from 'react-redux';
import ListOfUsers from "../components/ListOfUsers";
import {chooseUser} from "../actions";

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