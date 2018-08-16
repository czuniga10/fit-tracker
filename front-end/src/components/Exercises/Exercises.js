import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Projects.css'

import { getAllWorkouts } from '../../services/workout.services';
import { updateUser } from '../../actions/actionCreators';

import ProjectItem from './ProjectItem/ProjectItem';

class Exercises extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        getAllExercises(id)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ exercises: res.data });
            }
        })
    }




    render() {
        const exercises = this.state.exercises;
        const displayExerciseItems = exercises.map(exercise => {
            const index = exercises.indexOf(exercise);
            return (<ExerciseItem 
                key={index} 
                index={index}
                id={exercises.id}
                workout_id={exercies.workout_id}
                exercies={exercises.exercie} 
                />)
        })
        
        return(
            <div className="workout-wrapper">
                <div className="workout-title">
                    Workouts
                </div>
                    {displayExercisetItems}
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Exercises)