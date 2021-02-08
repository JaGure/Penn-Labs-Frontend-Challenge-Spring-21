// holds the big message being displayed to the user, whether that
// be the welcome message or the current course's description

import React from 'react'
import courses from '../data/courses'

import WelcomeMessage from './WelcomeMessage'
import CourseDescription from './CourseDescription'

const MessageBox = props => {
  const { number } = props.currentCourseInfo // the ID tag of the course. initialized to 0, i.e., the user has yet to click on a course

  return (
    <>
      {number === 0 ? (
        <WelcomeMessage />
      ) : (
        <CourseDescription currentCourseInfo={props.currentCourseInfo} />
      )}
    </>
  )
}

export default MessageBox
