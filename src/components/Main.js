import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Section from './Section'
import Post from './Post'

const Main = () => (
  <div className="container">
    <Switch>
      <Route path="/:section/:galleryHash" component={Post} />
      <Route path="/:section?" component={Section} />
    </Switch>
  </div>
)

export default Main
