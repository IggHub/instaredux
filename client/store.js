//think of store like database

import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//root reducer
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  post,
  comment
}
//same as / ES6 version of const defaultState= {post: posts, comment: comments}

const store = createStore(rootReducer, defaultState);
const history = syncHistoryWithStore(browserHistory, store);

export default store;
export default history;
