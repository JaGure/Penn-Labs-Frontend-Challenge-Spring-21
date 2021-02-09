import React, { useState } from 'react'

const Filter = props => {
  const { filterCoursesByCode } = props

  const [isActive, setIsActive] = useState(true)
  const [dropdownClassName, setDropdownClassName] = useState(
    'dropdown is-right'
  ) // allows us to toggle the is-active class

  const [
    courseCodeCheckBoxesChecked,
    setCourseCodeCheckBoxesChecked,
  ] = useState([false, false, false, false])

  // toggle showing the filter menu
  const toggleDropdown = e => {
    e.preventDefault()

    setIsActive(!isActive)

    if (isActive) {
      setDropdownClassName('dropdown is-active')
    } else {
      setDropdownClassName('dropdown')
    }
  }

  // update the array containing which boxes are checked
  // then pass the results up so that the courses may be filtered
  const updateCourseCodeCheckBoxesChecked = index => {
    const tempArr = courseCodeCheckBoxesChecked
    tempArr[index] = !courseCodeCheckBoxesChecked[index]
    setCourseCodeCheckBoxesChecked(tempArr)

    filterCoursesByCode(tempArr)
  }

  return (
    <div className={dropdownClassName}>
      <div className="dropdown-trigger">
        <button className="button is-rounded" onClick={e => toggleDropdown(e)}>
          Filter Courses
        </button>
      </div>
      <div className="dropdown-menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>
              <strong>Course Code</strong>
            </p>
          </div>
          <hr className="dropdown-divider"></hr>
          <div className="dropdown-item">
            <input
              type="checkbox"
              onClick={() => updateCourseCodeCheckBoxesChecked(0)}
            />{' '}
            100-199
          </div>
          <div className="dropdown-item">
            <input
              type="checkbox"
              onClick={() => updateCourseCodeCheckBoxesChecked(1)}
            />{' '}
            200-299
          </div>
          <div className="dropdown-item">
            <input
              type="checkbox"
              onClick={() => updateCourseCodeCheckBoxesChecked(2)}
            />{' '}
            300-399
          </div>
          <div className="dropdown-item">
            <input
              type="checkbox"
              onClick={() => updateCourseCodeCheckBoxesChecked(3)}
            />{' '}
            400+
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
