import React, { useState } from 'react'
import './App.css'

import Nav from './components/Nav'
import Courses from './components/Courses'
import MessageBox from './components/MessageBox'

const App = () => {
  // top-level state for managing the current course description being viewed
  // pulling it up to this level allows the individual course and the course description
  // to talk to each other without too much headache
  const [currentCourseInfo, setCurrentCourseInfo] = useState({
    dept: '',
    number: 0,
    title: '',
    crossListed: [],
    prereqs: [],
    description: '',
  })

  // top-level state for managing the course cart
  // pulling it up to the app-level allows each course
  // to talk to the cart
  const [cart, updateCart] = useState([])

  // helper function for the courses to manage the cart
  // returns true if a course was successfully added, false otherwise
  const addCourseToCart = course => {
    if (cart.length >= 7) {
      return false
    } else {
      updateCart(cart.concat([course]))
      return true
    }
  }

  return (
    <>
      <Nav cart={cart} />

      {/* main body of the page; 1/3 of the width is the courses, the rest is for the description box */}
      <section className="hero has-background-light is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third box">
                <Courses
                  setCurrentCourseInfo={setCurrentCourseInfo}
                  addCourseToCart={addCourseToCart}
                />
              </div>
              <div className="column box ml-3 is-flex is-flex-direction-column">
                <MessageBox currentCourseInfo={currentCourseInfo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
