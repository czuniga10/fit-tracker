import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Tracker.css'

import { getAllDays } from '../../services/week.services';
import { updateUser } from '../../actions/actionCreators';

// import TrackerItem from './TrackerItem/TrackerItem';

class Tracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
                
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        getAllDays(id)
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
        // const days = this.state.days;
        // const displayProjectItems = projects.map(project => {
        //     const index = projects.indexOf(project);
        //     return (<ProjectItem 
        //         key={index} 
        //         index={index}
        //         id={project.id}
        //         userid={project.user_id}
        //         name={project.name} 
        //         details={project.details} 
        //         />)
        // })
        
        return(
            <div className="proj-wrapper">
                <div className="proj-title">
                    Week 1
                </div>
                    {/* {displayProjectItems} */}
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Tracker) ;