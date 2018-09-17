import React, {Component} from 'react';
import { connect } from 'react-redux';
// import './Projects.css'

import { getAllExercises, createExercise } from '../../services/exercise.services';
import { updateUser } from '../../actions/actionCreators';

import ExerciseItem from './ExerciseItem/ExerciseItem';

class Exercises extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: [],
            exercise: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleExerciseSubmit = this.handleExerciseSubmit.bind(this);

    }
    componentDidMount() {
        let id = this.props.match.params.id;
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

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        console.log(newState);
        this.setState({ [key]: newState });
    }

    handleExerciseSubmit() {
        let workout_id = this.props.match.params.id;
        const exercise = this.state.exercise;
        const body = {workout_id, exercise}
        createExercise(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res)
                } else {
                    console.log(res.data)
                    getAllExercises(workout_id)
                        .then( res => {
                            if (res.status !== 200){
                                console.log(res);
                            }
                            else{
                                this.setState({ exercises: res.data });
                            }
                        })
                }
            
            } )
       .catch(err => {throw err})
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
                <div className="add-workout">
                    <input className='exercise' value={this.state.exercise} type="text" name="exercise" onChange={ e => {this.handleInputChange(e) }}/>
                    <button onClick={ e => { this.handleExerciseSubmit(e) } }> +addSet </button>
                </div>
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Exercises)