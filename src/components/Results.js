import React from 'react'
import { RESULT_HINT_ID } from './Hint'

// Components
import { FaQuestionCircle } from 'react-icons/fa'
import Result from './Result'

// Styles
import { StyledResults, StyledSectionTitle } from './Styled'

const Results = ({ results }) =>
  <StyledResults>
    <StyledSectionTitle>
      Results{' '}
        <span
          data-rh-component
          data-hint-id={RESULT_HINT_ID}
          data-rh-at="right"
        >
          <FaQuestionCircle />
        </span>
    </StyledSectionTitle>
    {results.map((result, i) => <Result result={result} key={i} />)}
  </StyledResults>

export default Results
