import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Projects.css'

import { getAllProjects } from '../../services/project.services';
import { updateUser } from '../../actions/actionCreators';
import { createProject } from '../../services/project.services';

import ProjectItem from './ProjectItem/ProjectItem';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            name: '',
            details: ''
        }

        this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        getAllProjects(id)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ projects: res.data });
            }
        })
    }

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        this.setState({ [key]: newState });
    }

    handleProjectSubmit() {
        let user_id = this.props.userInfo.id;
        const name = this.state.name;
        const details = this.state.details;
        const body = {user_id, name, details}
        createProject(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res)
                } else {
                    console.log(res.data)
                    getAllProjects(user_id)
                        .then( res => {
                            if (res.status !== 200){
                                console.log(res);
                            }
                            else{
                                this.setState({ projects: res.data });
                            }
                        })
                }
            
            } )
       .catch(err => {throw err})
    }

    handleUpdate() {
        
    }

    render() {

        const projects = this.state.projects;
        const displayProjectItems = projects.map(project => {
            const index = projects.indexOf(project);
            return (<ProjectItem 
                key={index} 
                index={index}
                id={project.id}
                userid={project.user_id}
                name={project.name} 
                details={project.details} 
                />)
        })
        
        return(
            <div className="proj-wrapper">
                <div className="proj-title">
                    Projects
                </div>
                    {displayProjectItems}
                <div className="add-proj">
                    <input className='name' value={this.state.name} type="text" name="name" onChange={ e => {this.handleInputChange(e) }}/>
                    <input className='details' value={this.state.details} type="text" name="details" onChange={ e => {this.handleInputChange(e) }}/>
                    <button onClick={ e => { this.handleProjectSubmit(e) } }> +addProject </button>
                </div>
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Projects) ;