// export const UPDATE_AUTH = "UPDATE_AUTH";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const UPDATE_LIFT = "UPDATE_LIFT";


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

export function updateLift(lift){
    return {
        type: UPDATE_LIFT,
        payload: lift
    }
}

