import { GET_WORKOUT } from '../actions/actionCreators';

let workoutState = {};

function workoutInfo( state = workoutState, action ){
    switch( action.type ) {
        case GET_WORKOUT:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default workoutInfo