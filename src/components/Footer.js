import React from 'react'

import { FaGithub } from 'react-icons/fa'

// Styles
import { StyledFooter, StyledGithubLink, StyledDevelopedBy, StyledAwesomeDeveloper } from './Styled'

const Footer = () =>
  <StyledFooter>
    <StyledDevelopedBy>
      Developed by{' '}
      <StyledAwesomeDeveloper href='https://github.com/arncet' target='_blank' rel='noopener noreferrer'>
        Arnaud CETOUTE
      </StyledAwesomeDeveloper>
    </StyledDevelopedBy>
    <StyledGithubLink href='https://github.com/arncet/media-query-tester' target='_blank' rel='noopener noreferrer'>
      <FaGithub />
    </StyledGithubLink>
  </StyledFooter>

export default Footer
