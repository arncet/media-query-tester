import React from 'react'

// Components
import MediaQueryInfos from './MediaQueryInfos'

// Contexts
import QyeryContext from '../contexts/Query'

// Styles
import { StyledAnd } from './Styled'

const And = ({ section, section: { input, matches } }) =>
  <QyeryContext.Consumer>
    {({ selectedQueries, selectQuery, deselectQuery }) => {
      const isSelected = selectedQueries.includes(input)
      const onClick = isSelected ? deselectQuery : selectQuery

      return (
        <StyledAnd matches={matches} selected={isSelected} onClick={e => {
          e.stopPropagation()
          onClick(input)
        }}>
          <MediaQueryInfos section={section} />
        </StyledAnd>
      )
    }}
  </QyeryContext.Consumer>

export default And
