import React from 'react'
import get from 'lodash/get'

// Styles
import { StyledHint, StyledHintTitle, StyledHintInfo, StyledHintImage } from './Styled'

export const PREVIEW_HINT_ID = 'PREVIEW_HINT_ID'
export const RESULT_HINT_ID = 'RESULT_HINT_ID'

const HintHeader = () => <StyledHintTitle>What is that?{' '}<span role="img" aria-label="Thinking">🤔️</span>️</StyledHintTitle>

const PreviewHint = () =>
  <StyledHint>
    <HintHeader />
    <p>The preview section represent how media queries are interpreted by your browser.</p>
    <p>
      <b>Verticals</b> symbols represent <b>height</b> CSS property (eg: height, max-height or min-height),
      and <b>horizontals</b> ones represent <b>width</b> CSS property:
    </p>
    <ul>
      <li><StyledHintImage src='images/fixed.png' />: border with this type of extension represent a <b>fixed</b> value (eg: width: 100px)</li>
      <li><StyledHintImage src='images/min.png' />: border with opposed arrow represent a <b>minimum</b> value (eg: min-width: 100px)</li>
      <li><StyledHintImage src='images/max.png' />: border with faced arrow represent a <b>maximum</b> value (eg: max-width: 100px)</li>
    </ul>
    <StyledHintInfo>
      <span role="img" aria-label="Information">ℹ️</span>{' '}
      Only media queries that contain <b>width/height</b> CSS properties are displayed.
    </StyledHintInfo>
  </StyledHint>

const ResultHint = () =>
  <StyledHint>
    <HintHeader />
    <p>The results section split the given media query into <b>OR</b> and <b>AND</b> section.</p>
    <p>It's also describe witch media queries are <b>valid/invalid</b> for your current browser size.</p>
    <ul>
      <li><StyledHintImage src='images/invalid-media-query' />: This media query is <b>invalid</b></li>
      <li><StyledHintImage src='images/valid-media-query' />: This media query is <b>valid</b></li>
    </ul>
    <StyledHintInfo>
      <span role="img" aria-label="Tips">💡</span>{' '}
      You can click on section to highlignt it on preview section.
    </StyledHintInfo>
  </StyledHint>

export const onRenderContent = target => {
  switch (get(target, ['dataset', 'hintId'])) {
    case PREVIEW_HINT_ID: return <PreviewHint />
    case RESULT_HINT_ID: return <ResultHint />
    default: return null
  }
}
