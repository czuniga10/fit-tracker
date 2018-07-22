import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Tracker.css'

import { getAllDays } from '../../services/week.services';
import { updateUser } from '../../actions/actionCreators';

// import TrackerItem from './TrackerItem/TrackerItem';

import TrackerItem from './TrackerItem/TrackerItem';

class Tracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
                days: []
        }

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        getAllDays(id)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ days: res.data.day_id });
            }
        })
    }




    render() {
        const days = this.state.days;
        const displayDayItems = days.map(day => {
            const index = days.indexOf(day);
            return (<TrackerItem 
                key={index} 
                index={index}
                id={day.project_id} 
                focus_id={day.focus_id}
                day_id={day.day_id}
                />)
        })
        
        return(
            <div className="tracker-wrapper">
                <div className="week-wrapper">
                    <div className="week-days">
                        {displayDayItems}
                        {/* <p className="days">Monday</p>
                        <p className="days">Tuesday</p>
                        <p className="days">Wednesday</p>
                        <p className="days">Thursday</p>
                        <p className="days">Friday</p>
                        <p className="days">Saturday</p>
                        <p className="days">Sunday</p>                         */}
                    </div>
                </div>


            </div> 
        
        
           )
    }
}
function mapStateToProps(state){
    return state;
  }
  
  export default connect( mapStateToProps, {updateUser} ) (Tracker) ;