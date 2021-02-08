import React, { useEffect, useState } from 'react'

const CourseDescription = props => {
  const {
    dept,
    number,
    title,
    crossListed,
    prereqs,
    description,
  } = props.currentCourseInfo

  //   const [hasCrossListings, setHasCrossListings] = useState(false)
  //   const [hasPrereqs, setHasPrereqs] = useState(false)

  //   // when the component loads, check which properties it has
  //   useEffect(() => {
  //     setHasCrossListings()
  //   }, [cp])

  return (
    <>
      <p className="title is-2">{dept + ' ' + number}</p>
      <p className="subtitle">{title}</p>
      <div className="content">
        {/* if have cross-listings, render them */}
        {!(crossListed === undefined || crossListed.length == 0) && (
          <p>
            <strong>Cross-Listings: </strong> {crossListed.join(', ')}
          </p>
        )}
        {/* if have prereqs, render them */}
      </div>
    </>
  )
}

export default CourseDescription
