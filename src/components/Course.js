import React, { useState } from 'react'
import s from 'styled-components'

import getCourseInfoFromName from '../logic/getCourseInfoFromName'

// wrapper to allow for some extra fine-tuned styling beyond bulma classes
const CourseWrapper = s.div`
    transition: 0.5s;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    border: 1px solid black;
`

const Course = props => {
  // currentCourseInfo: the course information being displayed in the description box (bubbled down from App)
  // coureInfo: *this* course's internal information
  const {
    courseName,
    setCurrentCourseInfo,
    addCourseToCart,
    hideCourse,
  } = props

  const [courseInfo, setCourseInfo] = useState({})
  const [hasCourseBeenClicked, setHasCourseBeenClicked] = useState(false)
  const [isInCart, setIsInCart] = useState(false)
  const [wrapperClassName, setWrapperClassName] = useState(
    'level box is-clickable'
  ) // for dynamically updating the background color

  // the first time a user clicks on this course, find and store the course info, then pass that on to the description box
  // otherwise, just pass on the already stored info
  const handleCourseInfo = () => {
    if (!hasCourseBeenClicked) {
      setHasCourseBeenClicked(true)

      const courseInfoFromName = getCourseInfoFromName(courseName)

      setCourseInfo(courseInfoFromName)
      setCurrentCourseInfo(courseInfoFromName)
    } else {
      setCurrentCourseInfo(courseInfo)
    }
  }

  // adds the course to the cart, if possible, and changes some state to update the rendering
  const handleAddButtonClick = e => {
    // this temp variable is here in case the course has yet to be cliked. Even if we set
    // courseInfo inside this function, it won't update for us to use within the function
    // body, so we need another way to access the data multiple times so we can update
    // courseInfo *and* send it to the cart
    let courseInfoTemp = courseInfo

    // if the user has never clicked on the course when they add to cart, the course's info has yet to be stored
    if (!hasCourseBeenClicked) {
      setHasCourseBeenClicked(true)

      courseInfoTemp = getCourseInfoFromName(courseName)
      setCourseInfo(courseInfoTemp)
    }

    const courseAdded = addCourseToCart(courseInfoTemp)

    if (courseAdded) {
      // once the course has been added to the cart, updates aspects of state that will change how it renders
      setWrapperClassName(wrapperClassName + ' has-background-light')
      setIsInCart(true)
    }

    e.stopPropagation()
  }

  // course name on the left, add to cart button on the right
  return (
    <>
      {!hideCourse && (
        <CourseWrapper className={wrapperClassName} onClick={handleCourseInfo}>
          <div className="level-left">
            <div className="level-item">
              <p className="is-size-4 has-text-weight-bold">{courseName}</p>
            </div>
          </div>

          <div className="level-right">
            <div className="level-item">
              {!isInCart && ( // don't display the add button if the course is in the cart
                <a
                  className="button is-info is-light"
                  onClick={e => handleAddButtonClick(e)}
                >
                  Add To Cart
                </a>
              )}
            </div>
          </div>
        </CourseWrapper>
      )}
    </>
  )
}

export default Course
