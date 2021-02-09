import React, { useEffect, useState } from 'react'
import s from 'styled-components'

import ArrayAsParagraph from './ArrayAsParagraph'

const CourseDescription = props => {
  const {
    dept,
    number,
    title,
    crossListed,
    prereqs,
    description,
  } = props.currentCourseInfo

  return (
    <div className="is-flex-grow-1 is-flex is-flex-direction-column">
      <div className="is-flex-grow-0">
        <p className="title is-2">{dept + ' ' + number}</p>
        <p className="subtitle">{title}</p>
        <div className="content">
          {/* if have cross-listings, render them */}
          <ArrayAsParagraph array={crossListed} title={'Cross Listings:'} />
          {/* if have prereqs, render them */}
          <ArrayAsParagraph array={prereqs} title={'Prereqs'} />
          <p>
            <strong>Description: </strong> {description}
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-center has-background-primary is-align-items-center">
        <p className="title is-1 is-flex-grow-0 is-italic has-text-light">
          What are you waiting for?
        </p>
        <p className="subtitle is-4 is-flex-grow-0 has-text-light">
          Add {dept + ' ' + number} to your cart!
        </p>
      </div>
    </div>
  )
}

export default CourseDescription
