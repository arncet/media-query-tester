import React from 'react'
import { PREVIEW_HINT_ID } from './Hint'

// Comopnents
import { FaQuestionCircle } from 'react-icons/fa'
import Preview from './Preview'

// Styles
import { StyledPreviews, StyledSectionTitle } from './Styled'

const Previews = ({ results }) =>
  <StyledPreviews>
    <StyledSectionTitle>
      Preview{' '}
      <span
        data-rh-component
        data-hint-id={PREVIEW_HINT_ID}
        data-rh-at="right"
      >
        <FaQuestionCircle />
      </span>
    </StyledSectionTitle>
    {results.map((result, i) => <Preview result={result} key={i} />)}
  </StyledPreviews>

export default Previews
