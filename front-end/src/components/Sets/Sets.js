import React, {Component} from 'react';
import { connect } from 'react-redux';
// import './Projects.css'

import { getAllSets } from '../../services/set.services';
import { updateUser } from '../../actions/actionCreators';

import SetItem from './SetItem/SetItem';

class Sets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sets: []
        }


    }
    componentDidMount() {
        let id = this.props.userInfo.id;
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
            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Sets) ;