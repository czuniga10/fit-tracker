import React, {Component} from 'react';
import { connect } from 'react-redux';

import { updateUser } from '../../../actions/actionCreators';
import { createProject } from '../../../services/project.services';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            details: ''
        }

        this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        this.setState({ [key]: newState });
    }

    handleProjectSubmit() {
        const name = this.state.name;
        const details = this.state.details;
        const body = {name, details}
        createProject(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res)
                } else {
                    console.log(res.data)
                }
            
            } )
            .catch(err => {throw err})

    }

    render() {
        const projName = this.state.name;
        const projDetails = this.state.details;
        const addDetailsToState = this.addDetailsToState;
        const addNameToState = this.addNameToState;
        const handleProjectSubmit = this.handleProjectSubmit;
        
        return(
            <div className="add-proj">
                <input className='name' value={this.state.name} type="text" name="name" onChange={ e => {this.handleInputChange(e) }}/>
                <input className='details' value={this.state.details} type="text" name="details" onChange={ e => {this.handleInputChange(e) }}/>
                <button onSubmit={ e => { handleProjectSubmit(e) } }> +addProject </button>
            </div>
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Projects) ;