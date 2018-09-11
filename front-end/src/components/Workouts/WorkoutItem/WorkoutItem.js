import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import './ProjectItem.css';


class WorkoutItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, name, date, time} = this.props;
        return(
        <Link to={`/exercise/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="name">
                        {name}
                    </div>
                    <div className="date">
                        {date}
                    </div>
                    <div className="time">
                        {time}
                    </div>
                </div> 
        </Link>
        )
    }
}
export default WorkoutItem;