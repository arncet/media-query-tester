import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import { parse } from '../utils'
import { createGlobalStyle } from 'styled-components'
import { onRenderContent } from './Hint'
import shuffle from 'lodash/shuffle'
import first from 'lodash/first'

// Components
import Editor from './Editor'
import Results from './Results'
import Previews from './Previews'
import BrowserInfos from './BrowserInfos'
import Footer from './Footer'
import ReactHintFactory from 'react-hint'

// Contexts
import QueryContext from '../contexts/Query'

// Styles
import {
  StyledDashboard,
  StyledEditorAndPreviews,
  StyledTitle,
  StyledDescription,
  StyledCustomReactHintWrapper,
  PURPLE
} from './Styled'
import 'react-hint/css/index.css'

// Features
import CODES from '../fixtures/codes'

const GlobalStyled = createGlobalStyle`
  html{
    border-top: 6px solid ${PURPLE};
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-image: linear-gradient(#93BAFD, #8771a5);
    min-height: 100vh;
    margin: 0px;
  }

  p{
    margin-top: 0px;
  }

  .react-hint__content{
    font-size: 13px;
    background-color: #444;

    :after{
      border-top-color: #444;
    }
  }
`

const ReactHint = ReactHintFactory(React)

class Dashboard extends Component {
  constructor(props) {
    super(props)
    const code = first(shuffle(CODES))
    this.state = {
      code,
      results: parse(code),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      selectedQueries: []
    }

    this.resize = debounce(this.resize, 100)
  }

  componentDidMount = () => window.addEventListener('resize', this.resize)

  componentWillUnmount = () => window.removeEventListener('resize', this.resize)

  resize = () => this.setState(state => ({
    results: parse(state.code),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }))

  onChange = value => this.setState({ code: value, results: parse(value) })

  selectQuery = query => this.setState(state => ({ selectedQueries: [...state.selectedQueries, query] }))

  deselectQuery = query => this.setState(state => ({
    selectedQueries: state.selectedQueries.reduce((prev, q) => q === query ? prev : [...prev, q], [])
  }))

  render() {
    const { results, code, screenWidth, screenHeight, windowWidth, windowHeight, selectedQueries } = this.state

    return (
      <QueryContext.Provider value={{
        selectedQueries,
        selectQuery: this.selectQuery,
        deselectQuery: this.deselectQuery,
      }}>
        <StyledDashboard>
          <StyledTitle><span>Media</span> Query Tester</StyledTitle>
          <StyledDescription>A simple tool to debug your media queries. 🛠</StyledDescription>
          <BrowserInfos
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
          />
          <StyledEditorAndPreviews>
            <Editor code={code} onChange={this.onChange} />
            <Previews results={results} />
          </StyledEditorAndPreviews>
          {results && <Results results={results} />}
          <Footer />
          <GlobalStyled />
          <ReactHint autoPosition events persist />
          <StyledCustomReactHintWrapper>
            <ReactHint
              autoPosition
              events
              persist
              attribute="data-rh-component"
              onRenderContent={onRenderContent}
            />
          </StyledCustomReactHintWrapper>
        </StyledDashboard>
      </QueryContext.Provider>
    )
  }
}

export default Dashboard;
