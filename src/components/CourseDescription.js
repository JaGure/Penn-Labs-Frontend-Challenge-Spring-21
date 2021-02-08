import React from 'react'
import courses from '../data/courses'

import WelcomeMessage from './WelcomeMessage'

const CourseDescription = props => {
  const {
    dept,
    number,
    title,
    crossListed,
    prereqs,
    description,
  } = props.currentCourseInfo

  return <>{number === 0 ? <WelcomeMessage /> : <div>b</div>}</>
}

export default CourseDescription
