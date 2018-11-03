import { GET_PROJECT } from '../actions/actionCreators';

let projectState = {};

function projectInfo( state = projectState, action ){
    switch( action.type ) {
        case GET_PROJECT:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default projectInfo