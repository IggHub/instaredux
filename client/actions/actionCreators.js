//increment
//index is the location; which like is being incremented?
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comments
export function addComment(postId, author, comment) {
  console.log("dispatching add comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comments
//index is the location/ which comment it is. There are typically more than 1 comment in a post
export function removeComment(postId, i) {

  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
