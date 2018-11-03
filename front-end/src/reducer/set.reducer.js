import { GET_SET } from '../actions/actionCreators';

let setsState = {};

function setsInfo( state = setsState, action ){
    switch( action.type ) {
        case GET_SET:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default setsInfo