import React, { useState } from 'react'
import courses from '../data/courses'
import s from 'styled-components'

import Course from './Course'
import Filter from './Filter'

const CoursesWrapper = s.div`
  height: 80vh;
`

const ScrollBox = s.div`
  overflow-y: scroll;
`

const Courses = props => {
  // needed for initializing the filtered courses array such
  // that every course is initially shown
  let tempFilteredCourses = []

  for (let i = 0; i < courses.length; i++) {
    tempFilteredCourses.push(parseInt(courses[i].number))
  }
  const [filteredCourses, setFilteredCourses] = useState(tempFilteredCourses)

  // filter courses by the filter array
  // if filter[i] is true, it means that the option to filter for courses
  // with code on the interval [(i + 1) * 100, (i + 1) * 100 + 99] has been
  // checked. this function appropriately adds all such courses to the
  // filtered array, which contains the codes of all the courses to be shown
  // note that if no boxes are checked, it is treated as all boxes being checked
  const filterCoursesByCode = filterArr => {
    const showAll = filterArr.every(isChecked => !isChecked)

    let coursesToDisplay = []

    for (let i = 0; i < courses.length; i++) {
      const courseNumber = parseInt(courses[i].number)

      if (filterArr[Math.floor(courseNumber / 100) - 1] || showAll) {
        coursesToDisplay.push(parseInt(courses[i].number))
      }

      setFilteredCourses(coursesToDisplay)
    }
  }

  return (
    <CoursesWrapper className="is-flex is-flex-direction-column">
      <div className="is-flex">
        <p className="title is-3 is-flex-grow-1">Course Offerings</p>
        <Filter
          className="is-align-self-flex-end	"
          filterCoursesByCode={filterCoursesByCode}
        />
      </div>
      <ScrollBox className="is-flex-grow-1">
        {courses.map(({ dept, number }) => (
          <Course
            courseName={`${dept}-${number}`}
            setCurrentCourseInfo={props.setCurrentCourseInfo}
            addCourseToCart={props.addCourseToCart}
            hideCourse={!filteredCourses.includes(parseInt(number))}
          />
        ))}
      </ScrollBox>
    </CoursesWrapper>
  )
}

export default Courses
