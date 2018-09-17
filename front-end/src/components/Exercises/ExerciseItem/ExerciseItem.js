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
        const {id, exercises} = this.props;

        return(
        <Link to={`/set/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="exercise">
                        {exercises}
                    </div>
                </div>
        </Link>
        )
    }
}
export default ExerciseItem;