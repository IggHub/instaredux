import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
//import Comment from '/Comment';

const Single = React.createClass({
  render() {
    const {postId} = this.props.params;

    const i = this.props.posts.findIndex((post) => post.code === postId);
//    console.log(i);
    const post = this.props.posts[i];
//    console.log(post);
    const postComments = this.props.comments[postId] || [];
    return(
      <div className="single-photo">
        <Photo i={i} key={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

export default Single;
