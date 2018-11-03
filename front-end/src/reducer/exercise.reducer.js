import { GET_EXERCISE } from '../actions/actionCreators';

let exerciseState = {};

function exerciseInfo( state = exerciseState, action ){
    switch( action.type ) {
        case GET_EXERCISE:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default exerciseInfo