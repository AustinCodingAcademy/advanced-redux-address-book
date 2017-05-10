import {connect} from 'react-redux';
import {chooseCurrentUser} from '../actions';
import {setSearchText} from '../actions';
import ListOfUsers from '../components/ListOfUsers';


function mapStateToProps(state) {
  return {
    users:state.users,
    searchText:state.searchText
  }
}

function mapDispatchToProps(dispatch) {
  return {
    chooseUser:function(user){
      let action = chooseCurrentUser(user);
      dispatch(action);
    },
    setSearchText:function(text){
      let action = setSearchText(text);
      dispatch(action);
    }
  }
}

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);
export default ListOfUsersContainer;