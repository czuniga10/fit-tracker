import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Projects.css'

import { getAllProjects } from '../../services/project.services';
import { updateUser } from '../../actions/actionCreators';

import ProjectItem from './ProjectItem/ProjectItem';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

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
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Projects) ;