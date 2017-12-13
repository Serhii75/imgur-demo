import React from 'react'
import moment from 'moment'
import Comments from './Comments'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showReplies: false }
  }

  handleReplies() {
    this.setState({ showReplies: !this.state.showReplies})
  }

  render() {
    const { comment } = this.props
    const { showReplies } = this.state

    return (
      <div>
        <div className="comment-item">
          <div className="comment-data">
            {comment.author} | {moment(comment.datetime*1000).format("DD MMM YYYY hh:mm a")}
          </div>
          {comment.comment}
        </div>
        {comment.children.length > 0 && <p onClick={() => this.handleReplies()}>Replies: {comment.children.length}</p>}
        <div className="comment-children" style={showReplies ? {display: 'block'} : {display: 'none'}}> 
          {comment.children && <Comments comments={comment.children} />}
        </div>          
      </div>
    )
  }  
}

export default Comment
