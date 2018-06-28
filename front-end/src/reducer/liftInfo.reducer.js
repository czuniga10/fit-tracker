import { UPDATE_LIFT} from '../actions/actionCreators';

let liftState = {};

function liftInfo( state = projectState, action ){
    switch( action.type ) {
        case UPDATE_LIFT:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default liftInfo