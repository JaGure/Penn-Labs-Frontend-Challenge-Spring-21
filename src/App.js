import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import Courses from './components/Courses'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <>
        <Nav />

        <section className="hero is-light is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-one-third box">
                  <Courses />
                </div>
                <div className="column box"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default App
