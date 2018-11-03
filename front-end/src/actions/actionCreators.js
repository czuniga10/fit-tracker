// export const UPDATE_AUTH = "UPDATE_AUTH";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const GET_PROJECT = "DELETE_PROJECT";
export const GET_WORKOUT = "DELETE_WORKOUT";
export const GET_EXERCISE = "DELETE_EXERCISE";
export const GET_SET = "DELETE_SET";



// export function updateAuth(boolean){
//     return {
//         type: UPDATE_AUTH,
//         payload: boolean
//     }
// }

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function updateProject(project){
    return {
        type: UPDATE_PROJECT,
        payload: project
    }
}

// export function updateLift(lift){
//     return {
//         type: UPDATE_LIFT,
//         payload: lift
//     }
// }

export function getProject(project){
    return {
        type: GET_PROJECT,
        payload: 
    }
}

export function getWorkout(workout){
    return {
        type: GET_WORKOUT,
        payload: 
    }
}

export function getExercise(exercise){
    return {
        type: GET_EXERCISE,
        payload: 
    }
}

export function getSet(set){
    return {
        type: GET_SET,
        payload: 
    }
}