import React from 'react'
import { Col, Image, Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Preview = ({ post, section }) => (
  <Col sm={4} md={3}>
    <Link to={`/${section}/${post.id}`}>
      <div className="preview">
        <img src={post.cover ? `http://i.imgur.com/${post.cover}b.jpg` : `http://i.imgur.com/${post.id}b.jpg`} />
        <h4 className="preview-title">{post.title}</h4>
      </div>
    </Link>
  </Col>
)

export default Preview
