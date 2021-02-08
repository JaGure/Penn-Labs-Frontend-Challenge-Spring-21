import React from 'react'
import courses from '../data/courses'

const CourseDescription = props => {
  const {
    dept,
    number,
    title,
    crossListed,
    prereqs,
    description,
  } = props.currentCourseInfo

  return <div>{number}</div>
}

export default CourseDescription
