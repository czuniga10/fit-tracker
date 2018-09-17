import React, {Component} from 'react';
import { connect } from 'react-redux';
// import './Projects.css'

import { getAllSets, createSet } from '../../services/set.services';
import { updateUser } from '../../actions/actionCreators';

import SetItem from './SetItem/SetItem';

class Sets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sets: [],
            type: '',
            reps: '',
            weight: '',
            is_completed: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSetSubmit = this.handleSetSubmit.bind(this);

    }
    componentDidMount() {
        let id = this.props.match.params.id;
        getAllSets(id)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ sets: res.data });
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

    handleSetSubmit() {
        let exercise_id = this.props.match.params.id;
        const type = this.state.type;
        const reps = this.state.reps;
        const weight = this.state.weight;
        const is_completed = this.state.is_completed;
        const body = {exercise_id, type, reps, weight, is_completed}
        createSet(body)
            .then( res => {
                if (res.status !== 200) {
                    alert(res)
                } else {
                    console.log(res.data)
                    getAllSets(exercise_id)
                        .then( res => {
                            if (res.status !== 200){
                                console.log(res);
                            }
                            else{
                                this.setState({ sets: res.data });
                            }
                        })
                }
            
            } )
       .catch(err => {throw err})
    }



    render() {
        const sets = this.state.sets;
        const displaySetItems = sets.map(set => {
            const index = sets.indexOf(set);
            return (<SetItem 
                key={index} 
                index={index}
                id={set.id}
                exercise_id={set.exercise_id}
                type={set.type} 
                reps={set.reps}                 
                weight={set.weight}
                is_completed={set.is_completed}
                />)
        })
        
        return(
            <div className="proj-wrapper">
                <div className="proj-title">
                    Sets
                </div>
                    {displaySetItems}
                <div className="add-workout">
                    <input className='type' value={this.state.type} type="text" name="type" onChange={ e => {this.handleInputChange(e) }}/>
                    <input className='reps' value={this.state.reps} type="text" name="reps" onChange={ e => {this.handleInputChange(e) }}/>
                    <input className='weight' value={this.state.weight} type="text" name="weight" onChange={ e => {this.handleInputChange(e) }}/>
                    <input className='is_completed' value={this.state.is_completed} type="checkbox" name="is_completed" onChange={ e => {this.handleInputChange(e) }}/>
                    <button onClick={ e => { this.handleSetSubmit(e) } }> +addSet </button>
                </div>
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Sets) ;