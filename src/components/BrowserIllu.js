import React from 'react'

// Styles
import {
  StyledBrowserIllu,
  StyledBrowserTopbar,
  StyledBrowserTopbarButton,
  StyledBrowserScreen
} from './Styled'

const BrowserIllu = ({ ratioX, ratioY, children }) =>
  <StyledBrowserIllu width={`${ratioX * 100}vw`} height={`${ratioY * 100}vh`}>
    <StyledBrowserTopbar>
      <StyledBrowserTopbarButton />
      <StyledBrowserTopbarButton />
      <StyledBrowserTopbarButton />
    </StyledBrowserTopbar>
    <StyledBrowserScreen>
      {children}
    </StyledBrowserScreen>
  </StyledBrowserIllu>

export default BrowserIllu
