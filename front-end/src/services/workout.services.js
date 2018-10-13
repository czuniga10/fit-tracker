import axios from 'axios';

const baseURL = '/api/workout';

function getAllWorkouts(projectid) {
    return axios
        .get(`${baseURL}/${projectid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOneWorkout(projectid, workoutid) {
    return axios
        .get(`${baseURL}/${projectid}/${workoutid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function createWorkout(body){
    return axios
        .post(`${baseURL}/create`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function updateWorkout(workoutid, body){
    return axios
        .put(`${baseURL}/update/${workoutid}`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function deleteWorkout(workoutid){
    return axios
        .post(`${baseURL}/delete/${workoutid}`)
        .then( res => res)
        .catch( err => {throw err})
}

export {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};