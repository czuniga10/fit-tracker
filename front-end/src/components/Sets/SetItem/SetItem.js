import React, {Component} from 'react';


// import './ProjectItem.css';


class SetItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {type, reps, weight, is_completed} = this.props;
        console.log(is_completed)
        return(
        // <Link to={`/set/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="type">
                        {type}
                    </div>
                    <div className="reps">
                        {reps}
                    </div>
                    <div className="weight">
                        {weight}
                    </div>
                    <button className="is_completed" value={this.state.is_completed} type="checkbox">
                        {is_completed}
                    </button>
                </div> 
        // </Link>
        )
    }
}
export default SetItem;