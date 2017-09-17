import React from 'react';
import {setSearchText} from "../actions";
import {connect} from "react-redux";

function SearchBox (props){
    return(
        <input onChange={
            (e) => {
                props.setSearchText(e.target.value)
            }
        } />
    );
}


  function mapDispatchToProps(dispatch){
    return {
      setSearchText:function(text){
        dispatch(setSearchText(text));
      }
    }
  }
  
  const SearchBoxContainer = connect(null,mapDispatchToProps)(SearchBox);
  // connects a fnc and calls another right away on line above 
  export default SearchBoxContainer