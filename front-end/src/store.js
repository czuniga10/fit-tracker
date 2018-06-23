import projectInfo from './reducer/projectInfo.reducer';
import userInfo from './reducer/userInfo.reducer';

let rootReducer = combineReducers({
    projectInfo,
    userInfo
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );