import axios from 'axios';

const baseURL = '/api/project';

function getAllProjects(userid) {
    return axios
        .get(`${baseURL}/${userid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOneProject(userid, projectid) {
    return axios
        .get(`${baseURL}/${userid}/${projectid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function createProject(body){
    return axios
        .post(`${baseURL}/create`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function updateProject(body){
    return axios
        .put(`${baseURL}/update`, body)
        .then( res => res)
        .catch( err => {throw err})
}

function deleteProject(userid){
    return axios
        .post(`${baseURL}/delete/${userid}`)
        .then( res => res)
        .catch( err => {throw err})
}

export {
    getAllProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject
};