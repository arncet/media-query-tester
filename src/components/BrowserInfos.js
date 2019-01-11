import React from 'react'

// Components
import { FaInfoCircle } from 'react-icons/fa'

// Styles
import {
  StyledBrowserInfos,
  StyledBrowserInfosGroup,
  StyledBrowserInfo,
  StyledBrowserInfoSeparator,
  StyledBrowserInfoProperty
} from './Styled'

const BrowserInfos = ({ screenWidth, screenHeight, windowWidth, windowHeight }) =>
  <StyledBrowserInfos>
    <FaInfoCircle />
    <StyledBrowserInfosGroup>
      <StyledBrowserInfo>
        <StyledBrowserInfoProperty>
          <span role="img" aria-label="Left-right arrow">↔️</span>️{' '}
          Screen width :
        </StyledBrowserInfoProperty>
        {screenWidth} px
      </StyledBrowserInfo>
      <StyledBrowserInfo>
        <StyledBrowserInfoProperty>
          <span role="img" aria-label="Top-bottom arrow">↕️</span>{' '}
          Screen height :
        </StyledBrowserInfoProperty>
        {screenHeight} px
      </StyledBrowserInfo>
    </StyledBrowserInfosGroup>
    <StyledBrowserInfoSeparator />
    <StyledBrowserInfosGroup>
      <StyledBrowserInfo>
        <StyledBrowserInfoProperty>
          <span role="img" aria-label="Left-right arrow">↔️</span>{' '}
          Browser width :
        </StyledBrowserInfoProperty>
        {windowWidth} px
      </StyledBrowserInfo>
      <StyledBrowserInfo>
        <StyledBrowserInfoProperty>
          <span role="img" aria-label="Top-bottom arrow">↕️</span>{' '}
          Browser height :
        </StyledBrowserInfoProperty>
        {windowHeight} px
      </StyledBrowserInfo>
    </StyledBrowserInfosGroup>
    <StyledBrowserInfoSeparator />
    <StyledBrowserInfosGroup>
      <StyledBrowserInfo>
        <StyledBrowserInfoProperty>
          <span role="img" aria-label="Desktop computer">🖥️</span>{' '}
          User agent :
        </StyledBrowserInfoProperty>
        {window.navigator.userAgent}
      </StyledBrowserInfo>
    </StyledBrowserInfosGroup>
  </StyledBrowserInfos>

export default BrowserInfos
