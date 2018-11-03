import React, {Component} from 'react';
import { connect } from 'react-redux';


import { getAllExercises, createExercise, updateExercise } from '../../services/exercise.services';
import { updateUser, getProject } from '../../actions/actionCreators';

import ExerciseItem from './ExerciseItem/ExerciseItem';

class Exercises extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: [],
            exercise: ''
        }
        this.refresh = this.refresh.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateExercise = this.handleCreateExercise.bind(this);
        this.handleSaveChange = this.handleSaveChange.bind(this);

    }
    componentDidMount() {
        let workout_id = this.props.match.params.id;
        this.refresh(workout_id)
    }
    //'refreshes' components to update webpage
    refresh(workout_id) {
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
    //stores user input in state
    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        console.log(newState);
        this.setState({ [key]: newState });
    }
    //create
    handleCreateExercise() {
        let workout_id = this.props.match.params.id;
        const exercise = this.state.exercise;
        const body = {workout_id, exercise}
        createExercise(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res)
                } else {
                    this.refresh(workout_id);
                }
            })
            .catch(err => {throw err})
        this.setState({
            exercise: ''
        })
    }
    //edit
    handleSaveChange(index) {
        let workout_id = this.props.match.params.id;
        const exercise_id = this.state.exercises[index].id;
        const ex = this.state[`exercise${index}`];
        const body = {exercise_id, ex};
        console.log(exercise_id);
        console.log(ex);
        updateExercise(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res);
                } else{
                    this.refresh(workout_id);
                }
            })
            .catch(err => {throw err});
        this.setState({
            [`exercise${index}`]: ''
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
                exercise={ex.exercise} 
                handleSaveChange={this.handleSaveChange}
                handleInputChange={this.handleInputChange}
                exerciseValue={this.state[`exercise${index}`]}
                />)
        })
        console.log(this.state);
        return(
            <div className="workout-wrapper">
                <div className="workout-title">
                    Exercises
                </div>
                    {displayExerciseItems}
                <div className="add-workout">
                    <input className='exercise' value={this.state.exercise} type="text" name="exercise" onChange={ e => {this.handleInputChange(e) }}/>
                    <button onClick={ e => { this.handleCreateExercise(e) } }> +addSet </button>
                </div>
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser, getProject} ) (Exercises)