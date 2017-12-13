import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import App from './containers/App'
import './scss/base.scss'

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer, composeEnhancers(
  applyMiddleware(...middleware)
))
const history = createBrowserHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/:section?' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
