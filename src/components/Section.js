import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Image } from 'react-bootstrap'
import { fetchPosts, clearStore } from '../actions'
import Preview from './Preview'
import Spinner from './Spinner'

const mapStateToProps = ({ posts, page }, { match }) => {
  const selectedSection = match.params.section ? match.params.section : 'hot'
  return {
    selectedSection,
    page,
    posts
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: (section) => {
    dispatch(fetchPosts(section))
  },
  clearStore: () => {
    dispatch(clearStore())
  }
})

class Section extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const selectedSection = nextProps.selectedSection
    //console.log(selectedSection)
    if (selectedSection !== this.props.selectedSection) {
      this.props.clearStore()
    }
  }

  loadMore(selectedSection, page) {
    console.log('Time to load:', selectedSection, page)
    this.props.getPosts({ selectedSection, page })
  }

  render() {
    const { posts, selectedSection, page } = this.props
    const items = posts.length ? posts.map(post => <Preview key={post.id} post={post} section={selectedSection} />) : []
    console.log(posts.length)
    //console.log(this.props)
    return (
      <div>
        <h1 className="heading">{selectedSection}</h1>
        <Row>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => this.loadMore(selectedSection, page)}
            hasMore={true || false}
            loader={<Spinner />}
          >
            {items}
          </InfiniteScroll>
        </Row>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Section))


/*
        <Row>
        {posts.length > 0 ?
          posts.map(post => <Preview key={post.id} post={post} section={selectedSection} />) :
          <Spinner />
        }
        </Row>


 */