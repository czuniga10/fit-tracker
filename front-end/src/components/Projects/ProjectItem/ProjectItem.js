import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './ProjectItem.css';


class ProjectItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, user_id, name, details} = this.props;
        console.log(this.props)
        return(
        <Link to={`/workout/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="name">
                        {name}
                    </div>
                    <div className="details">
                        {details}
                    </div>
                </div> 
        </Link>
        )
    }
}
export default ProjectItem;