// small helper component. takes an array and a title,
// and returns it as a p tag with the array contents
// written out in a list

import React from 'react'

const ArrayAsParagraph = props => {
  const { array, title } = props

  return (
    <>
      {/* only render the list if it is non-empty */}
      {!(array === undefined || array.length == 0) && (
        <p>
          <strong>{title + ': '}</strong> {array.join(', ')}
        </p>
      )}
    </>
  )
}

export default ArrayAsParagraph
