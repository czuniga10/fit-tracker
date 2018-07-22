import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import './ProjectItem.css';


class FocusItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, lift, reps, weight, is_completed} = this.props;
        console.log(this.props)
        return(
            
                <div className="focus-inner-wrapper">
                    <div className="lift">{lift}</div>
                    <div className="reps">{reps}</div>
                    <input value="220lb" className="weight">{weight}</input>
                    <input type="checkbox" className="completed" checked="unchecked"></input>
                </div>

        )
    }
}
export default FocusItem;