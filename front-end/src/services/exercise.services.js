import axios from 'axios';

const baseURL = '/api/exercise';

function getAllExercises(workoutid) {
    return axios
        .get(`${baseURL}/${workoutid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOneExercise(workoutid, exerciseid) {
    return axios
        .get(`${baseURL}/${workoutid}/${exerciseid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function createExercise(body){
    return axios
        .post(`${baseURL}/create`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function updateExercise(exerciseid, body){
    return axios
        .post(`${baseURL}/update/${exerciseid}`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function deleteExercise(exerciseid){
    return axios
        .post(`${baseURL}/delete/${exerciseid}`)
        .then( res => res)
        .catch( err => {throw err})
}

export {
    getAllExercises,
    getOneExercise,
    createExercise,
    updateExercise,
    deleteExercise
};