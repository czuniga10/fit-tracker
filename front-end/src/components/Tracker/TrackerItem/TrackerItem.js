import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import './ProjectItem.css';


class TrackerItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, day_id, focus_id} = this.props;
        console.log(this.props)
        return(
        <Link to={`/tracker/${id}/${focus_id}`} className='day-holder-link'>
            <p className="days">{day_id}</p>
        </Link>
        )
    }
}
export default TrackerItem;