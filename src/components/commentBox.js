import React from 'react';
import request from 'superagent';
import CommentList from './commentList';
import CommentForm from './commentForm';

export default class CommentBox extends React.Component {

  static get propTypes() {
    return {
      pollInterval: React.PropTypes.number.isRequired,
      getUrl: React.PropTypes.string.isRequired,
      postUrl: React.PropTypes.string.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  handleCommentSubmit(comment) {
    const comments = this.state.data;
    comment.id = Date.now();

    const newComments = comments.concat([comment]);
    this.setState({ data: newComments });

    request
      .post(this.props.postUrl)
      .send(comment)
      .end((err, res) => {
        if (err) {
          this.setState({ data: comments });
          throw err;
        }
        this.setState({ data: res.body });
      });
  }

  loadCommentsFromServer() {
    request
      .get(this.props.getUrl)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        this.setState({ data: res.body });
      });
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }


}
