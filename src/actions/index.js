export const SELECT_SECTION = 'SELECT_SECTION'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CLEAR_POSTS = 'CLEAR_POSTS'
export const CLEAR_PAGE = 'CLEAR_PAGE'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS'

const clientID = '14633f4e229a4bc';

export const selectGallery = section => ({
  type: SELECT_SECTION,
  section
})

export const changePage = page => ({
  type: CHANGE_PAGE,
  page
})

export const receivePosts = (section, posts) => ({
  type: RECEIVE_POSTS,
  section,
  posts
})

export const clearPosts = () => ({
  type: CLEAR_POSTS
})

export const clearPage = () => ({
  type: CLEAR_PAGE
})

export const clearComments = () => ({
  type: CLEAR_COMMENTS
})

export const clearStore = () => dispatch => {
  dispatch(clearPosts())
  dispatch(clearPage())
  //dispatch(clearComments())  
}

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const fetchPosts = params => dispatch => {
  return fetch(`https://api.imgur.com/3/gallery/${params.selectedSection}/viral/{{window}}/${params.page}?perPage=60&album_previews=true`, {
    headers: { 
       authorization: `Client-ID ${clientID}`
    }
  })
  .then(response => response.json())
  .then(json => {
    dispatch(receivePosts(params.selectedSection, json.data))
    //console.log('Page: ', params.page)
    const page = params.page
    dispatch(changePage(page))
  })
}

export const fetchComments = galleryHash => dispatch => {
  return fetch(`https://api.imgur.com/3/gallery/${galleryHash}/comments/`, {
    headers: { 
       authorization: `Client-ID ${clientID}`
    }
  })
  .then(response => response.json())
  .then(json => {
    dispatch(receiveComments(json.data))
  })
}
