let initialState = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
}


function userInfo( state = initialState, action ){
    switch( action.type ) {
        case "UPDATE_USER":
            return Object.assign( action.payload );

        default: return state;
    }
}

export default userInfo;