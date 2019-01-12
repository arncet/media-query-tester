import React, { Component } from 'react'

// Comopnents
import QueryRules from './QueryRules'
import BrowserIllu from './BrowserIllu'

// Styles
import { StyledPreview, StyledPreviewIframe } from './Styled'

const DEFAULT_RATIO_X = 0.2
const DEFAULT_RATIO_Y = 0.2

class Preview extends Component {
  state = {
    ratioX: DEFAULT_RATIO_X,
    ratioY: DEFAULT_RATIO_Y
  }

  convertSize = (property, value) => {
    const { ratioX, ratioY } = this.state
    const valueInt = parseInt(value, 10)
    const unit = value.replace(valueInt, '')
    if (property.includes('width')) return `${parseInt(valueInt, 10) * ratioX}${unit}`
    if (property.includes('height')) return `${parseInt(valueInt, 10) * ratioY}${unit}`
    return value
  }

  createQueryRules = () => {
    const { result } = this.props
    const andSections = result
      ? result.orSections.reduce((prev, orSection) => [...prev, ...orSection.andSections], [])
      : []

    return andSections
      .filter(andSection => /(height|width)/.test(andSection.input) && !andSection.error)
      .reduce((prev, andSection) => {
        const [, property] = andSection.media.match(/([a-zA-Z-]*?):/) || ['', null]
        const [, value] = andSection.media.replace(')', '').match(/:\s(.*)/) || ['', null]

        return (property && value)
          ? [...prev, {...andSection, property, value: this.convertSize(property, value) }]
          : prev
      }, [])
  }

  render = () => {
    const { ratioX, ratioY } = this.state
    const queryRules = this.createQueryRules()

    return (
      <StyledPreview>
        <BrowserIllu ratioX={ratioX} ratioY={ratioY}>
          <QueryRules queryRules={queryRules} />
        </BrowserIllu>
      </StyledPreview>
    )
  }
}

export default Preview
