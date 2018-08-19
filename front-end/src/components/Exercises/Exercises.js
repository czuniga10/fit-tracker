import React, {Component} from 'react';
import { connect } from 'react-redux';
// import './Projects.css'

import { getAllExercises } from '../../services/exercise.services';
import { updateUser } from '../../actions/actionCreators';

import ExerciseItem from './ExerciseItem/ExerciseItem';

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
                console.log(res.data);
            }
        })
    }




    render() {
        const exercises = this.state.exercises;
        const displayExerciseItems = exercises.map(ex => {
            const index = exercises.indexOf(ex);
            return (<ExerciseItem 
                key={index} 
                index={index}
                id={ex.id}
                workout_id={ex.workout_id}
                exercises={ex.exercise} 
                />)
        })
        
        return(
            <div className="workout-wrapper">
                <div className="workout-title">
                    Exercises
                </div>
                    {displayExerciseItems}
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Exercises)