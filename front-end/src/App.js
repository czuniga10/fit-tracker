import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Projects from './components/Projects/Projects';


import { findUserInfo } from './services/user.services';

import { updateUser } from './actions/actionCreators'


//temporary, used for testing, when user logs in, user info will be provided by user/authO
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      loading: true
    }
  }

  componentDidMount(){
    findUserInfo(1)
      .then( res => {
        console.log(res.data[0]);
        let newUserInfo = res.data[0];
        this.props.updateUser(newUserInfo)
        this.setState({loading: false})
        ;
      })
  }

    render() {
      const {loading} = this.state;
      return (
        !loading && 
        <div className="App">
          <Route exact path='/' component={Projects} />
          {/* <Route path='/workout/:id' component={Workout} /> */}
        </div>
      );
    }
  }

function mapStateToProps(state){
  return state;
}

export default withRouter( connect( mapStateToProps, {updateUser} ) (App) );