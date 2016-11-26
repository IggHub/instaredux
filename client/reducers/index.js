//root reducer to handle all reducers
//good practice: create a reducer for each state (i.e. comment state, post state)
//recall in store.js, we have import rootReducer from './reducers/index';
//to do this:


//necessary reducer modules from redux
import {combineReducers} from 'redux'; //can combine different reducers into one (usually named root) http://redux.js.org/docs/api/combineReducers.html
import {routerReducer} from 'react-router-redux'; //syncs react router with redux https://github.com/reactjs/react-router-redux

//import posts and comments state and action
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
