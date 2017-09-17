export function chooseUser(user){
    // this fnc is an action creator
    return {
        type: "CHOOSE_USER",
        value:user
    }
}

export function setSearchText(text){
    // this fnc is an action creator
    return {
        type: "SET_SEARCH_TEXT",
        value:text
    }
}