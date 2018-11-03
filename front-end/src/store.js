import { createStore, combineReducers } from 'redux';
// import projectInfo from './reducer/projectInfo.reducer';
import userInfo from './reducer/userInfo.reducer';
import projectInfo from './reducer/project.reducer';
import workoutInfo from './reducer/workout.reducer';
import exerciseInfo from './reducer/exercise.reducer';
import setInfo from './reducer/set.reducer';



let rootReducer = combineReducers({
    projectInfo,
    workoutInfo,
    exerciseInfo,
    setInfo,
    userInfo
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );