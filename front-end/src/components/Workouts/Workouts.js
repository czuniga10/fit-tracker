import React, {Component} from 'react';
import { connect } from 'react-redux';
// import './Projects.css'

import { getAllWorkouts, createWorkout } from '../../services/workout.services';
import { updateUser } from '../../actions/actionCreators';

import WorkoutItem from './WorkoutItem/WorkoutItem';

class Workouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workouts: [],
            name: '',
            date: '',
            time: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleWorkoutSubmit = this.handleWorkoutSubmit.bind(this);

    }
    componentDidMount() {
        let id = this.props.match.params.id;
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

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        console.log(newState);
        this.setState({ [key]: newState });
    }

    handleWorkoutSubmit() {
        let project_id = this.props.match.params.id;
        const name = this.state.name;
        const date = this.state.date;
        const time = this.state.time;
        const body = {project_id, name, date, time}
        createWorkout(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res)
                } else {
                    console.log(res.data)
                    getAllWorkouts(project_id)
                        .then( res => {
                            if (res.status !== 200){
                                console.log(res);
                            }
                            else{
                                this.setState({ workouts: res.data });
                            }
                        })
                }
            
            } )
       .catch(err => {throw err})
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
                <div className="add-workout">
                    <input className='name' value={this.state.name} type="text" name="name" onChange={ e => {this.handleInputChange(e) }}/>
                    <input className='date' value={this.state.date} type="text" name="date" onChange={ e => {this.handleInputChange(e) }}/>
                    <input className='time' value={this.state.time} type="text" name="time" onChange={ e => {this.handleInputChange(e) }}/>
                    <button onClick={ e => { this.handleWorkoutSubmit(e) } }> +addWorkout </button>
                </div>
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps ) (Workouts)