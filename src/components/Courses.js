import React from 'react'
import courses from '../data/courses'
import s from 'styled-components'

import Course from './Course'

const Container = s.div`
  overflow-y: scroll;
`

export default () => (
  <Container>
    {courses.map(({ dept, number }) => (
      <Course courseName={`${dept}-${number}`} />
    ))}
  </Container>
)
