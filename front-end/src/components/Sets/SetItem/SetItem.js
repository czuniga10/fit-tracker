import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import './ProjectItem.css';


class SetItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, type, reps, weight, is_completed} = this.props;
        console.log(this.props)
        return(
        <Link to={`/set/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="name">
                        {type}
                    </div>
                    <div className="details">
                        {reps}
                    </div>
                    <div className="details">
                        {weight}
                    </div>
                    <div className="details">
                        {is_completed}
                    </div>
                </div> 
        </Link>
        )
    }
}
export default SetItem;