import axios from 'axios';

const baseURL = '/api/week';

function getAllDays(projectid) {
    return axios
        .get(`${baseURL}/${projectid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOneDay(projectid, dayid) {
    return axios
        .get(`${baseURL}/${projectid}/${dayid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOneFocus(projectid, dayid, focusid) {
    return axios
        .get(`${baseURL}/${projectid}/${dayid}/${focusid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function createLift(projectid, dayid, focusid, body){
    return axios
        .post(`${baseURL}/${projectid}/${dayid}/${focusid}/create`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function updateLift(projectid, dayid, focusid, liftid, body){
    return axios
        .post(`${baseURL}/${projectid}/${dayid}/${focusid}/update/${liftid}`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function deleteProject(liftid){
    return axios
        .post(`${baseURL}/delete/${liftid}`)
        .then( res => res)
        .catch( err => {throw err})
}

export {
    getAllDays,
    getOneDay,
    getOneFocus,    
    createLift,
    updateLift,
    deleteLift
};