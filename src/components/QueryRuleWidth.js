import React from 'react'

// Components
import Border from './QueryRuleBorder'

// Contexts
import QyeryContext from '../contexts/Query'

// Styles
import { StyledWidth } from './Styled'

const Width = ({ rule: { property, value, input, orSection } }) => {
  const isMin = property.includes('min')
  const isMax = property.includes('max')

  return (
    <QyeryContext.Consumer>
      {({ selectedQueries }) => {
        const isDirectlySelected = selectedQueries.includes(input)
        const isSelectedByParent = selectedQueries.includes(orSection)
        const isSelected = isDirectlySelected || isSelectedByParent

        return (
          <StyledWidth width={value} isMin={isMin} isSelected={isSelected} data-rh={input}>
            <Border isMin={isMin} isMax={isMax} />
            <Border isMin={isMin} isMax={isMax} />
          </StyledWidth>
        )
      }}
    </QyeryContext.Consumer>
  )
}

export default Width
