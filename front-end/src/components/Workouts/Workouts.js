import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Workout.css';

import { getAllWorkouts, createWorkout, updateWorkout } from '../../services/workout.services';
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

        this.refresh = this.refresh.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSaveChange = this.handleSaveChange.bind(this);
        this.handleWorkoutSubmit = this.handleWorkoutSubmit.bind(this);

    }
    componentDidMount() {
        let project_id = this.props.match.params.id;
        this.refresh(project_id);
    }

    refresh(project_id){
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
                    this.refresh(project_id)
                }
            
            } )
       .catch(err => {throw err})
       this.setState({
          name: '',
          date: '',
          time: ''
       })
    }

    handleSaveChange(index) {
        const id = this.state.workouts[index].id;
        const project_id = this.props.match.params.id;
        const name = this.state[`name${index}`];
        const date = this.state[`date${index}`];
        const time = this.state[`time${index}`];
        const body = {id, project_id, name, date, time};
        updateWorkout(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res);
                } else{
                    this.refresh(project_id);
                }
            })
            .catch(err => {throw err});

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
                nameValue={this.state[`name${index}`]} 
                dateValue={this.state[`date${index}`]} 
                timeValue={this.state[`time${index}`]} 
                handleInputChange={this.handleInputChange}
                handleSaveChange={this.handleSaveChange}
                />)
        })
        
        return(
            <div className="workout-wrapper">
                <div className="workout-title">
                    Workouts
                </div>
                <div className="display-workout-items">
                    {displayWorkoutItems}
                    <div className="add-workout">
                        <input className='add-name' placeholder="Name" value={this.state.name} type="text" name="name" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='add-date' placeholder="Date" value={this.state.date} type="text" name="date" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='add-time' placeholder="Time" value={this.state.time} type="text" name="time" onChange={ e => {this.handleInputChange(e) }}/>
                        <button onClick={ e => { this.handleWorkoutSubmit(e) } }> +addWorkout </button>
                    </div>
                </div>
            </div> 
        )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps ) (Workouts)