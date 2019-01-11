import React from 'react'
import partition from 'lodash/partition'

// Components
import Width from './QueryRuleWidth'
import Height from './QueryRuleHeight'

// Styles
import { StyledQueryRulesWrapper } from './Styled'

const QueryRules = ({ queryRules }) => {
  const [ widthRules, heightRules ] = partition(queryRules, rule => rule.input.includes('width'))

  return (
    <div>
      <StyledQueryRulesWrapper directionColumn={true}>
        {widthRules.map((rule, i) => <Width rule={rule} key={i} />)}
      </StyledQueryRulesWrapper>
      <StyledQueryRulesWrapper directionColumn={false}>
        {heightRules.map((rule, i) => <Height rule={rule} key={i} />)}
      </StyledQueryRulesWrapper>
    </div>
  )
}

export default QueryRules
