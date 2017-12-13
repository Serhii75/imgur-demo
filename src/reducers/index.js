import { combineReducers } from 'redux'
import { SELECT_SECTION, CHANGE_PAGE, RECEIVE_POSTS, CLEAR_POSTS, CLEAR_PAGE, RECEIVE_COMMENTS, CLEAR_COMMENTS } from '../actions'

const selectedSection = (state = 'hot', action) => {
  switch (action.type) {
    case SELECT_SECTION:
      return action.section
    default:
      return state
  }
}

const page = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page + 1
    case CLEAR_PAGE:
      return 0
    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case CLEAR_COMMENTS:
      return []
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return state.concat(action.posts)
    case CLEAR_POSTS:
      return []
    default:
      return state
  }
}



const rootReducer = combineReducers({
  selectedSection,
  page,
  posts,
  comments
})

export default rootReducer
