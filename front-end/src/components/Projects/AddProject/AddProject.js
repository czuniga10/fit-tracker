import React, {Component} from 'react';
import { connect } from 'react-redux';

import { updateUser } from '../../../actions/actionCreators';
import { createProject } from '../../../services/project.services';

// this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
// this.addNameToState = this.addNameToState.bind(this);
// this.addDetailsToState = this.addDetailsToState.bind(this);


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            details: ''
        }
    }

    addNameToState(value, e) {
        this.setState( {name: e.target.value} )
    }

    addDetailsToState(value, e) {
        this.setState( {details: e.target.value} )
    }

    handleProjectSubmit() {
        const n = this.state.name;
        const d = this.state.details;
        const body = {n, d}
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
                <input value={projName} onChange={e => { addNameToState(e)}} />
                <input value={projDetails} onChange={e => { addDetailsToState(e)}}/>
                <button onSubmit={handleProjectSubmit()}> +addProject </button>
            </div>
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Projects) ;