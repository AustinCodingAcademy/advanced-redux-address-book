export function chooseCurrentUser(user) {
  //this object is an action.
  return {
    type:"CHOOSE_CURRENT_USER",
    value: user
  }
}

export function setSearchText(text) {
    return {
        type:"SET_SEARCH_TEXT",
        value: text
    }
}

