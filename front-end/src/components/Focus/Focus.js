import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Focus.css'

import { updateUser } from '../../actions/actionCreators';
import { getOneDay } from '../../services/week.services';



import FocusItem from './FocusItem/FocusItem';

class Focus extends Component {
    constructor(props) {
        super(props)
        this.state = {
                focuses: []
        }

    // this.handleYupClick = this.handleYupClick.bind(this);
    // this.handleNopeClick = this.handleNopeClick.bind(this);

    }
    componentDidMount() {
        let id = this.props.userInfo.id;
        getOneDay(id)
        .then( res => {
            if (res.status !== 200){
                console.log(res);
            }
            else{
                this.setState({ focuses: res.data });
            }
        })
    }




    render() {
        const focuses = this.state.focuses;
        const displayFocusItems = focuses.map(focus => {
            const index = focuses.indexOf(focus);
            return (<FocusItem 
                key={index} 
                index={index}
                project_id={focus.project_id}
                id={focus.focus_id}
                lift={focus.lift} 
                reps={focus.reps}
                weight={focus.weight}
                is_completed={focus.is_completed} 
                />)
        })
        
        return(

                <div className="day-wrapper">
                
                    <div className="lift-wrapper">
                        <div className="lift-title">Week 1</div>
                        <div className="focus-wrapper">

                            <div className="focus-border">
                                <div className="focus-title">Chest</div>

                                {displayFocusItems}

                                {/* <div className="focus-inner-wrapper">
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
                                </div> */}
                                <div className="focus-inner-wrapper">
                                       + add lift                                   
                                </div>

                            </div>
                                <div className="focus-border">
                                    <div className="add-focus">
                                    + add new muscle group focus
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
  
  export default connect( mapStateToProps, {updateUser} ) (Focus) ;