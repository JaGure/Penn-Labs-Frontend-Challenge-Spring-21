import React from 'react'
import courses from '../data/courses'
import s from 'styled-components'

import Course from './Course'

const Container = s.div`
  height: 80vh;
  overflow-y: scroll;
`

export default props => (
  <Container>
    {courses.map(({ dept, number }) => (
      <Course
        courseName={`${dept}-${number}`}
        setCurrentCourseInfo={props.setCurrentCourseInfo}
        addCourseToCart={props.addCourseToCart}
      />
    ))}
  </Container>
)
