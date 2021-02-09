import React from 'react'
import s from 'styled-components'

const WelcomeMesssageWrapper = s.div`
    width: 100%;
    height: 100%;
`

const WelcomeMessage = () => {
  return (
    <WelcomeMesssageWrapper className="is-flex is-flex-direction-column is-justify-content-center">
      <p className="title has-text-centered is-2">
        Welcome to Penn Course Cart!
      </p>
      <p className="subtitle is-italic is-6 has-text-centered">
        Click on a course to get started
      </p>
    </WelcomeMesssageWrapper>
  )
}

export default WelcomeMessage
