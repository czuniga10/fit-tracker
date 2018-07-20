import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Tracker.css'

import { getAllDays } from '../../services/week.services';
import { updateUser } from '../../actions/actionCreators';

// import TrackerItem from './TrackerItem/TrackerItem';

class Tracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
                days: []
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        getAllDays(id)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ projects: res.data });
            }
        })
    }




    render() {
        // const days = this.state.days;
        // const displayProjectItems = projects.map(project => {
        //     const index = projects.indexOf(project);
        //     return (<ProjectItem 
        //         key={index} 
        //         index={index}
        //         id={project.id}
        //         userid={project.user_id}
        //         name={project.name} 
        //         details={project.details} 
        //         />)
        // })
        
        return(
            <div className="tracker-wrapper">
                <div className="week-wrapper">
                    <div className="week-days">
                        <p className="days">Monday</p>
                        <p className="days">Tuesday</p>
                        <p className="days">Wednesday</p>
                        <p className="days">Thursday</p>
                        <p className="days">Friday</p>
                        <p className="days">Saturday</p>
                        <p className="days">Sunday</p>                        
                    </div>
                </div>



                <div className="day-wrapper">
                
                    <div className="lift-wrapper">
                        <div className="lift-title">Week 1</div>
                        <div className="focus-wrapper">

                            <div className="focus-border">
                                <div className="focus-title">Chest</div>

                                <div className="focus-inner-wrapper">
                                    <div className="lift">Bench</div>
                                    <div className="reps">3x10</div>
                                    <input value="220lb" className="weight"></input>
                                    <input type="checkbox" className="completed" checked="unchecked"></input>
                                    
                                </div>

                                <div className="focus-inner-wrapper">
                                    <div className="lift">Bench</div>
                                    <div className="reps">3x10</div>
                                    <input value="220lb" className="weight"></input>
                                    <input type="checkbox" className="completed" ></input>                                    
                                </div>
                                <div className="focus-inner-wrapper">
                                    <div className="lift">Bench</div>
                                    <div className="reps">3x10</div>
                                    <input value="220lb" className="weight"></input>
                                    <input type="checkbox" className="completed" ></input>                                    
                                </div>
                                <div className="focus-inner-wrapper">
                                    <div className="lift">Bench</div>
                                    <div className="reps">3x10</div>
                                    <input value="220lb" className="weight"></input>
                                    <input type="checkbox" className="completed" ></input>                                    
                                </div>
                                <div className="focus-inner-wrapper">
                                    <div className="lift">Bench</div>
                                    <div className="reps">3x10</div>
                                    <input value="220lb" className="weight"></input>
                                    <input type="checkbox" className="completed" ></input>                                    
                                </div>
                                <div className="focus-inner-wrapper">
                                    <div className="lift">Bench</div>
                                    <div className="reps">3x10</div>
                                    <input value="220lb" className="weight"></input>
                                    <input type="checkbox" className="completed" ></input>                                    
                                </div>
                                <div className="focus-inner-wrapper">
                                    <div className="lift">Bench</div>
                                    <div className="reps">3x10</div>
                                    <input value="220lb" className="weight"></input>
                                    <input type="checkbox" className="completed"></input>                                    
                                </div>

                            </div>

                            

                        </div>




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