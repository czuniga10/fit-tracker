import axios from 'axios';

const baseURL = '/api/set';

function getAllSets(exerciseid) {
    return axios
        .get(`${baseURL}/${exerciseid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOneSet(exerciseid, setid) {
    return axios
        .get(`${baseURL}/${exerciseid}/${setid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function createSet(body){
    return axios
        .post(`${baseURL}/create`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function updateSet(setid, body){
    return axios
        .post(`${baseURL}/update/${setid}`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function deleteSet(setid){
    return axios
        .post(`${baseURL}/delete/${setid}`)
        .then( res => res)
        .catch( err => {throw err})
}

export {
    getAllSets,
    getOneSet,
    createSet,
    updateSet,
    deleteSet
};