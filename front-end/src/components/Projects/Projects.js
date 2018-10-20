import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Project.css'

import { getAllProjects, updateProject, createProject } from '../../services/project.services';
import { updateUser } from '../../actions/actionCreators';

import ProjectItem from './ProjectItem/ProjectItem';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            name: '',
            details: ''
        }
        this.refresh = this.refresh.bind(this);
        this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSaveChange = this.handleSaveChange.bind(this);

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        this.refresh(id);
    }
    //'refreshes' components to update webpage
    refresh(id) {
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
        console.log(newState);
        this.setState({ [key]: newState });
    }
    //creates new project
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
                    this.refresh(user_id)
                }
            
            } )
       .catch(err => {throw err})
    this.setState({
        name: '',
        details: ''
    })
    }

   //edits
   handleSaveChange(index) {
    const id = this.state.projects[index].id;
    const user_id = this.props.userInfo.id;
    const name = this.state[`name${index}`];
    const details = this.state[`details${index}`];
    const body = {id, user_id, name, details};
    updateProject(body)
        .then( res => {
            if (res.status !== 200) {
                alert(res);
            } else{
                //redirect to workout
                this.refresh(id);
            }
        })
        .catch(err => {throw err});
    this.setState({
        [`project${index}`]: ''
    })
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
                nameValue={this.state[`name${index}`]}
                detailsValue={this.state[`details${index}`]}
                handleInputChange={this.handleInputChange}
                handleSaveChange={this.handleSaveChange}
                />)
        })
    return(
        <div className="proj-wrapper">
            <div className="proj-title">
                Projects
            </div>
            <div className='display-proj-items'>
                {displayProjectItems}
                <div className="add-proj">
                    <input className='add-name'placeholder="Name" value={this.state.name} type="text" name="name" onChange={ e => {this.handleInputChange(e) }}/>
                    <input className='add-details' placeholder="Description" value={this.state.details} type="text" name="details" onChange={ e => {this.handleInputChange(e) }}/>
                    <button onClick={ e => { this.handleProjectSubmit(e) } }> +addProject </button>
                </div>
            </div>
        </div>
        )        
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Projects) ;