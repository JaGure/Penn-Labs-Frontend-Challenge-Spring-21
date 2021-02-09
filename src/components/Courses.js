import React from 'react'
import courses from '../data/courses'
import s from 'styled-components'

import Course from './Course'

const CoursesWrapper = s.div`
  height: 80vh;
`

const ScrollBox = s.div`
  height: 90%;
  overflow-y: scroll;
`

const Courses = props => (
  <CoursesWrapper>
    <p className="title is-3">Course Offerings</p>
    <ScrollBox>
      {courses.map(({ dept, number }) => (
        <Course
          courseName={`${dept}-${number}`}
          setCurrentCourseInfo={props.setCurrentCourseInfo}
          addCourseToCart={props.addCourseToCart}
        />
      ))}
    </ScrollBox>
  </CoursesWrapper>
)

export default Courses
