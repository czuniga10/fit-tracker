// export const UPDATE_AUTH = "UPDATE_AUTH";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const UPDATE_LIFT = "UPDATE_LIFT";
// export const ADD_TO_CART = "ADD_TO_CART";
// export const GET_CARD = "GET_CARD";
// export const EMPTY_CART = "EMPTY_CART";
// export const DELETE_ITEM = "DELETE_ITEM";

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

// export function addToCart(product){
//     return {
//         type: ADD_TO_CART,
//         payload: product
//     }
// }

// export function emptyCart(){
//     return {
//         type: EMPTY_CART,
//     }
// }

// export function deleteItem() {
//     return {
//         type: DELETE_ITEM
//     }
// }

// export function getCard(card){
//     return {
//         type: GET_CARD,
//         payload: card
//     }
// }