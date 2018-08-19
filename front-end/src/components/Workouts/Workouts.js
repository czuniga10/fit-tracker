import React, {Component} from 'react';
import { connect } from 'react-redux';
// import './Projects.css'

import { getAllWorkouts } from '../../services/workout.services';
import { updateUser } from '../../actions/actionCreators';

import WorkoutItem from './WorkoutItem/WorkoutItem';

class Workouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workouts: []
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        getAllWorkouts(id)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ workouts: res.data });
            }
        })
    }




    render() {
        const workouts = this.state.workouts;
        const displayWorkoutItems = workouts.map(workout => {
            const index = workouts.indexOf(workout);
            return (<WorkoutItem 
                key={index} 
                index={index}
                id={workout.id}
                project_id={workout.project_id}
                name={workout.name}                
                date={workout.date} 
                time={workout.time} 
                />)
        })
        
        return(
            <div className="workout-wrapper">
                <div className="workout-title">
                    Workouts
                </div>
                    {displayWorkoutItems}
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Workouts)