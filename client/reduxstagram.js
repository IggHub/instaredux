//more info on router here: https://github.com/ReactTraining/react-router/tree/master/docs/guides

//necessities
import React from 'react';
import {render} from 'react-dom';

//css
import css from './styles/style.styl';

//components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/SIngle';

//router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
//indexroute sets default, i.e. route path="/" ro whiechever component IndexRoute points to: http://stackoverflow.com/questions/32706913/react-router-what-is-the-purpose-of-indexroute
//
import {Provider} from 'react-redux';

import store, {history} from './store';

//if history were to be export const history =...; it would be import {history} because it was not a default export
//import rootReducer from './reducers/index';
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
render(router,document.getElementById('root'));
