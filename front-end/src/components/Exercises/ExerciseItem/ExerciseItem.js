import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import './ProjectItem.css';


class ExerciseItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, workout_id, exercise} = this.props;
        console.log(this.props)
        return(
        <Link to={`/exercise/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="exercise">
                        {exercise}
                    </div>
                </div>
        </Link>
        )
    }
}
export default ExerciseItem;