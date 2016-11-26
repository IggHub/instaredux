function postComments(state=[], action){
  switch(action.type) {
    case 'ADD_COMMENT':
      //return new state with new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]

    case 'REMOVE_COMMENT':
      //console.log("remove comment yo");
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]

    default:
      return state;
  }
  return state;
}

function comments(state=[], action){
  //console.log(state, action);
  //console.log("comments");
  if (typeof action.postId !== 'undefined'){
    return {
      //take current state
      ...state,
      //overwrite this post with new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
