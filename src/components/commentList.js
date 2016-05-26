import React from 'react';
import Comment from './comment';

const CommentList = props => {
  const commentNodes = props.data.map(comment => {
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );
  });

  return (
    <div className="commentList">
      {commentNodes}
    </div>
  );
};

CommentList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default CommentList;
