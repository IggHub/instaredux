import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}
//recall $r.store.dispatch (video 9, I believe)

const App = connect(mapStateToProps, mapDispatchToProps)(Main); //this will connect states (comments and props) and dispatch (action)
//adding (Main) will transfer the state and dispatch objects to main
//React inspect console: now has posts, comments, &c as props
//main now also has action props! (i.e. addComment, increment, &c.)
//see it as: connect stateToProps and dispatchToProps to Main component
//statetoprops has posts and comments
//dispatchtoprops has all the actions (binds actionCreators - which includes all the actions, to dispatch.)
//injects data from store into whatever component

export default App;
