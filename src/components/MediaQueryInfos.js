import React from 'react'
import { /*removeWithSpaces,*/ trim } from '../utils'

// Components
import { SuccessIcon, ErrorIcon, WarningIcon } from './Icon'

const MediaQueryInfos = ({ section: { input, matches, media, error } }) =>
  <div>
    <div>
      {matches ? <SuccessIcon /> : <ErrorIcon />}
      {error && <WarningIcon tooltip='This rule is malformed' />}
      {trim(input)}
    </div>
    {/*{!error && removeWithSpaces(media) !== removeWithSpaces(input) && <p>Can be writed : {media}</p>}*/}
  </div>

export default MediaQueryInfos
