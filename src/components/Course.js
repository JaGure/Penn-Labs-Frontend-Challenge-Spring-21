import React, { useState } from 'react'
import s from 'styled-components'
import getCourseInfoFromName from '../logic/getCourseInfoFromName'

// wrapper to allow for added shadow on hovering
const CourseWrapper = s.div`
    transition: 0.5s;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
    }
`

const Course = props => {
  const { courseName, setCurrentCourseInfo } = props
  const [courseInfo, setCourseInfo] = useState({})
  const [hasCourseBeenClicked, setHasCourseBeenClicked] = useState(false)
  const [isInCart, setIsInCart] = useState(false)
  const [wrapperClassName, setWrapperClassName] = useState('level box') // for dynamically updating the background color

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

  // adds the course to the cart and changes some state to update the rendering
  const addCourseToCart = () => {
    // once the course has been added to the cart, updates aspects of state that will change how it renders
    setWrapperClassName(wrapperClassName + ' has-background-light')
    setIsInCart(true)
  }

  // coures name on the left, add to cart button on the right
  return (
    <>
      <CourseWrapper className={wrapperClassName} onClick={handleCourseInfo}>
        <div className="level-left">
          <div className="level-item">
            <p className="is-size-4 has-text-weight-bold">{courseName}</p>
          </div>
        </div>
        {isInCart ? ( // don't display the add button if the course is in the cart
          <></>
        ) : (
          <div className="level-right">
            <div className="level-item">
              <div className="button" onClick={addCourseToCart}>
                Add
              </div>
            </div>
          </div>
        )}
      </CourseWrapper>
    </>
  )
}

export default Course
