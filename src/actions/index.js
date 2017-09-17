export function chooseUser(user){
    // this fnc is an action creator
    return {
        type: "CHOOSE_USER",
        value:user
    }
}