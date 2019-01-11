import React from 'react'
import size from 'lodash/size'

// Components
import MediaQueryInfos from './MediaQueryInfos'

// Contexts
import QyeryContext from '../contexts/Query'

// Styles
import {
  StyledOr,
  StyledAnds,
  StyledAnd,
  StyledOrLeftBorder
} from './Styled'

const Or = ({ section, section: { input, matches, andSections } }) =>
  <QyeryContext.Consumer>
    {({ selectedQueries, selectQuery, deselectQuery }) => {
      const isSelected = selectedQueries.includes(input)
      const onClick = isSelected ? deselectQuery : selectQuery
      const hasAndSection = size(andSections) > 1

      return (
        <StyledOr matches={matches} selected={isSelected} onClick={() => onClick(input)}>
          {hasAndSection && <StyledOrLeftBorder />}
          <MediaQueryInfos section={section} />
          {hasAndSection &&
            <StyledAnds>
              {andSections.map((andSection, j) => {
                const { input: andInput, matches: andMatches } = andSection
                const andIsSelected = selectedQueries.includes(andInput)
                const andOnClick = andIsSelected ? deselectQuery : selectQuery
                return (
                  <StyledAnd key={j} matches={andMatches} selected={andIsSelected} onClick={e => {
                    e.stopPropagation()
                    andOnClick(andInput)
                  }}>
                    <MediaQueryInfos section={andSection} />
                  </StyledAnd>
                )
              })}
            </StyledAnds>
          }
        </StyledOr>
      )
    }}
  </QyeryContext.Consumer>

export default Or
