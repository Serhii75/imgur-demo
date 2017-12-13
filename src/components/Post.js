import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchComments } from '../actions'
import { Col, Row } from 'react-bootstrap'
import Comments from './Comments'

const mapStateToProps = ({ posts, comments }, { match }) => {
  const galleryHash = match.params.galleryHash || ''
  const post = posts.find(item => item.id === match.params.galleryHash)
  return { post, galleryHash, comments }
}

const mapDispatchToProps = dispatch => ({
  getComments: (galleryHash) => {
    dispatch(fetchComments(galleryHash))
  }
})

class Post extends React.Component {
  componentDidMount() {
    const { galleryHash } = this.props
    this.props.getComments(galleryHash)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.galleryHash !== this.props.galleryHash) {
      this.props.getComments(nextProps.galleryHash)    
    }
  }  

  render() {
    const { post, comments } = this.props
    console.log(post)
    return (
      <div className="post">
        <h1 className="heading">{post.title}</h1>
        <Row>
          <Col xs={12}>
            <div className="images-container text-center">
              {post.images &&
                post.images.map(image => (
                  <div key={image.id} className="image-item">
                    <img className="img-responsive" src={image.link} /> 
                  </div>
                ))
              }
              {post.mp4 &&
                <video preload="auto" autoPlay="autoplay" loop="loop" muted="muted">
                  <source src={post.mp4} type="video/mp4" />
                </video>
              }
            </div>
          </Col>
        </Row>
        <h3>Comments</h3>
        <Row className="comments-container">
          <Col xs={12}>
            <Comments comments={comments} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
