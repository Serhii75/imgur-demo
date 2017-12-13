import React, { Component } from 'react'
import HeaderNav from '../components/HeaderNav'
import Main from '../components/Main'
import Footer from '../components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="app">
        <HeaderNav />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
