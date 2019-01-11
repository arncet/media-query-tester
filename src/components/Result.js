import React from 'react'
import isEmpty from 'lodash/isEmpty'

// Components
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import Or from './ResultOr'

// Styles
import {
  StyledResult,
  StyledTagSuccess,
  StyledTagWarning,
  StyledTagError,
  StyledOrs
} from './Styled'

const Result = ({ result: { error, matches, orSections } }) =>
  <StyledResult>
    {error &&<StyledTagWarning><FaExclamationTriangle />Oops ! This media query is malformed</StyledTagWarning>}
    {matches
      ? <StyledTagSuccess><FaCheck /> This media query match !</StyledTagSuccess>
      : <StyledTagError><FaTimes /> This media query doest'n match !</StyledTagError>
    }
    {!isEmpty(orSections) &&
      <StyledOrs>
        {orSections.map((orSection, i) => <Or key={i} section={orSection} />)}
      </StyledOrs>
    }
  </StyledResult>

export default Result
