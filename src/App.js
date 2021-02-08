import React, { useState } from 'react'
import './App.css'

import Nav from './components/Nav'
import Courses from './components/Courses'
import CourseDescription from './components/CourseDescription'

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

  return (
    <>
      <Nav />

      {/* main body of the page; 1/3 of the width is the courses, the rest is for the description box */}
      <section className="hero has-background-light is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third box">
                <Courses setCurrentCourseInfo={setCurrentCourseInfo} />
              </div>
              <div className="column box">
                <CourseDescription currentCourseInfo={currentCourseInfo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
