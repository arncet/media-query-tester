import styled from 'styled-components'

export const SUCCESS_COLOR = '#68C752'
export const WARNING_COLOR = '#f6d04d'
export const ERROR_COLOR = '#E74C3C'
export const BLUE_PURPLE = '#90aff3';
export const DARK_BLUE = '#3154a9';
export const PURPLE = '#6e00ff';

export const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 2.5em;
  font-family: 'AmaticSC', cursive;
  margin-bottom: 8px;

  span {
    display: inline-block;
    background-color: ${PURPLE};
    color: #FFF;
    padding: 6px;
    line-height: 1em;
    border-radius: 3px;
  }
`

export const StyledDescription = styled.p`
  color: #FFF;
  text-align: center;
  margin-bottom: 30px;
  font-size: 15px;
  font-family: 'AmaticSC', cursive;
`

export const StyledIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
`

export const StyledDashboard = styled.div`
  padding: 0px 20px 0px 20px;
`

export const StyledBrowserInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff38;
  padding: 10px;
  color: #FFF;
  font-size: 20px;
  margin-bottom: 20px;
`

export const StyledBrowserInfosGroup = styled.div`
  margin: 0px 20px;
  max-width: 33%;
`

export const StyledBrowserInfo = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 2px;
`

export const StyledBrowserInfoSeparator = styled.div`
  margin: 0px 20px;
  width: 1px;
  height: 20px;
  background-color: #FFF;
`

export const StyledBrowserInfoProperty = styled.span`
  display: inline-block;
  padding: 3px 5px;
  background-color: #FFF;
  border-radius: 3px;
  color: ${BLUE_PURPLE};
  margin-right: 3px;
  font-size: 10px;
`

export const StyledEditorAndPreviews = styled.div`
  display: inline-block;
  width: 50%;
  margin-right: 20px;
`

export const StyledEditor = styled.div`
  padding: 0px 0px 20px 0px;
  background-color: #1E1E1E;
  margin-bottom: 20px;
`

export const StyledResults = styled.div`
  box-sizing: border-box;
  background-color: #ffffff61;
  padding: 10px 20px;
  color: ${DARK_BLUE};

  ${StyledDashboard} > & {
    display: inline-block;
    vertical-align: top;
    width: calc(50% - 20px);
  }
`

export const StyledResult = styled.div`
  border-bottom: 1px dashed;
  margin-bottom: 10px;

  :last-child{
    margin-bottom: 0px;
  }
`

const tag = `
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 6px;
  border-radius: 3px;

  svg{
    margin-right: 10px;
  }
`

export const StyledTagSuccess = styled.div`
  ${tag}
  color: #096700;
  background-color: ${SUCCESS_COLOR};
`

export const StyledTagWarning = styled.div`
  ${tag}
  color: #96501b;
  background-color: ${WARNING_COLOR};
`

export const StyledTagError = styled.div`
  ${tag}
  color: #2d0404;
  background-color: ${ERROR_COLOR};
`

const ruleTag = `
  position: absolute;
  left: 3px;
  top: 3px;
  padding: 3px;
  border-radius: 3px;
  color: #FFF;
  font-size: 10px;
  font-weight: 700;
`

export const StyledOrs = styled.ul`
  padding: 0px;
  list-style: none;
`

export const StyledOr = styled.li`
  position: relative;
  padding: 2px 25px;
  margin: 5px 0px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: 1px solid transparent;

  :hover{
    background-color: #ffffff85;
  }

  ${({ selected }) => selected ? `
    border-color: ${DARK_BLUE};
    border-radius: 3px;
    background-color: #ffffff85;
  ` : ''}

  :before {
    content: "OR";
    background-color: ${({ matches }) => matches ? SUCCESS_COLOR : ERROR_COLOR};
    ${ruleTag}
  }
`

export const StyledOrLeftBorder = styled.div`
  position: absolute;
  top: 23px;
  left: 12px;
  width: 3px;
  height: calc(100% - 34px);
  background-color: ${BLUE_PURPLE};
`

export const StyledAnds = styled.ul`
  padding: 0px;
  list-style: none;
`

export const StyledAnd = styled.li`
  position: relative;
  padding: 2px 35px;
  margin: 5px 0px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: 1px solid transparent;

  :hover{
    background-color: #00000014;
  }

  ${({ selected }) => selected ? `
    border-color: ${DARK_BLUE};
    border-radius: 3px;
    background-color: #ffffff85;
  ` : ''}

  :before {
    content: "AND";
    background-color: ${({ matches }) => matches ? SUCCESS_COLOR : ERROR_COLOR};
    ${ruleTag}
  }
`

export const StyledPreviews = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #ffffff61;
`

export const StyledPreview = styled.div`
  border-bottom: 1px dashed #E5E5E5;
  margin: 60px 0px;

  &:last-child{
    border-bottom: none;
    margin: 0px;
  }
`

export const StyledSectionTitle = styled.div`
  color: #FFF;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 7px;
  padding: 0px 20px 10px 0px;
  border-bottom: 1px solid #ffffffa1;
  margin-bottom: 20px;
  font-family: 'AmaticSC', cursive;

  ${StyledEditor} & {
    padding: 10px 20px 10px 20px;
  }

  ${StyledResults} & {
    color: ${DARK_BLUE};
    border-bottom-color: ${DARK_BLUE};
  }

  svg{
    vertical-align: middle;
    font-size: 20px;
  }
`

export const StyledBrowserIllu = styled.div`
  position: relative;
  margin: auto auto 80px auto;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export const StyledBrowserTopbar = styled.div`
  background-color: #DEDCDF;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 15px;
`

export const StyledBrowserScreen = styled.div`
  background-color: #FFF;
  height: 100%;
`

export const StyledBrowserTopbarButton = styled.div`
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 5px;

  :nth-child(1) { background-color: #FF6159; }
  :nth-child(2) { background-color: #FEC12F; }
  :nth-child(3) { background-color: #2BCD42; }
`

export const StyledQueryRulesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: ${({ directionColumn }) => directionColumn ? 'column': 'row'};
  pointer-events: none;
`

const commonQueryRule = ({ isMin, isSelected }) => `
  position: relative;
  pointer-events: auto;
  ${!isMin ? 'background-color: #717171' : ''};

  ${isMin
    ? `:hover:after, :hover:before{ box-shadow: 0px 0px 10px 2px #8282824f; }`
    : `:hover{ box-shadow: 0px 0px 10px 2px #8282824f; }`
  }

  ${isSelected
    ? isMin
      ? `:after, :before{ box-shadow: 0px 0px 10px 2px #8282824f; }`
      : `{ box-shadow: 0px 0px 10px 2px #8282824f; }`
    : ''
  }
`

const arrowTop = direction => `
  width: 0px;
  height: 0px;
  border-right: 5.5px solid transparent;
  border-left: 5.5px solid transparent;
  border-bottom: 5px solid #717171;
  background-color: transparent;
`

const arrowRight = direction => `
  width: 0px;
  height: 0px;
  border-top: 5.5px solid transparent;
  border-bottom: 5.5px solid transparent;
  border-left: 5px solid #717171;
  background-color: transparent;
`

const arrowBottom = direction => `
  width: 0px;
  height: 0px;
  border-right: 5.5px solid transparent;
  border-left: 5.5px solid transparent;
  border-top: 5px solid #717171;
  background-color: transparent;
`

const arrowLeft = direction => `
  width: 0px;
  height: 0px;
  border-bottom: 5.5px solid transparent;
  border-top: 5.5px solid transparent;
  border-right: 5px solid #717171;
  background-color: transparent;
`

const beforeAndAfterForWidth = `
  :before {
    content: " ";
    position: absolute;
    left: -50px;
    top: 0px;
    width: 50px;
    height: 1px;
    background-image: linear-gradient(to left, #717171, transparent);
  }
  :after {
    content: " ";
    position: absolute;
    right: -50px;
    top: 0px;
    width: 50px;
    height: 1px;
    background-image: linear-gradient(to right, #717171, transparent);
  }
`

const beforeAndAfterForHeight = `
  :before {
    content: " ";
    position: absolute;
    left: 0px;
    top: -50px;
    height: 50px;
    width: 1px;
    background-image: linear-gradient(to top, #717171, transparent);
  }
  :after {
    content: " ";
    position: absolute;
    left: 0px;
    bottom: -50px;
    height: 50px;
    width: 1px;
    background-image: linear-gradient(to top, transparent, #717171);
  }
`

export const StyledWidth = styled.div`
  ${props => commonQueryRule(props)}
  height: 1px;
  width: ${({ width }) => width};
  ${({ isMin }) => isMin ? beforeAndAfterForWidth : ''}
`

export const StyledHeight = styled.div`
  ${props => commonQueryRule(props)}
  width: 1px;
  height: ${({ height }) => height};
  ${({ isMin }) => isMin ? beforeAndAfterForHeight : ''}
`

export const StyledBorder = styled.div`
  background-color: #717171;
  position: absolute;

  ${StyledWidth} &:first-child {
    cursor: ew-resize;
    left: ${({ isMin }) => isMin ? '0px' : '-3px'};
    top: -5px;
    height: 10px;
    width: 3px;
    ${({ isMin, isMax }) => isMin || isMax ? (isMin ? arrowLeft : arrowRight) : ''}
  }

  ${StyledWidth} &:last-child {
    cursor: ew-resize;
    right: ${({ isMin }) => isMin ? '0px' : '-3px'};
    top: -5px;
    height: 10px;
    width: 3px;
    ${({ isMin, isMax }) => isMin || isMax ? (isMin ? arrowRight : arrowLeft) : ''}
  }

  ${StyledHeight} &:first-child {
    cursor: ns-resize;
    left: -5px;
    top: ${({ isMin }) => isMin ? '0px' : '-3px'};
    height: 3px;
    width: 10px;
    ${({ isMin, isMax }) => isMin || isMax ? (isMin ? arrowTop : arrowBottom) : ''}
  }

  ${StyledHeight} &:last-child {
    cursor: ns-resize;
    left: -5px;
    bottom: ${({ isMin }) => isMin ? '0px' : '-3px'};
    height: 3px;
    width: 10px;
    ${({ isMin, isMax }) => isMin || isMax ? (isMin ? arrowBottom : arrowTop) : ''}
  }
`

export const StyledHint = styled.div`
  background-color: #E5E5E5;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  font-size: 13px;

  ul {
    padding-left: 10px;
    list-style: none;
  }

  li {
    margin-bottom: 8px;
    padding-left: 10px;
    border-left: 1px solid;
  }
`

export const StyledHintTitle = styled.div`
  font-family: 'AmaticSC', cursive;
  font-size: 24px;
  letter-spacing: 3px;
  border-bottom: 1px solid;
  margin-bottom: 10px;
`

export const StyledHintInfo = styled.p`
  font-size: 13px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px 8px;
`

export const StyledHintImage = styled.img`
  width: 50px;
  vertical-align: middle;
`

export const StyledCustomReactHintWrapper = styled.div`
  .react-hint--bottom:after{
    border-bottom-color: #E5E5E5;
  }
  .react-hint--top:after{
    border-top-color: #E5E5E5;
  }
`

export const StyledFooter = styled.div`
  background-color: #00000057;
  color: #FFF;
  font-family: 'AmaticSC', cursive;
  padding: 20px;
  text-align: center;
  margin: 70px -30px 0px -30px;
`

export const StyledGithubLink = styled.a`
  color: #FFF;
  text-decoration: none;

  svg {
    font-size: 30px;
  }
`

export const StyledDevelopedBy = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`

export const StyledAwesomeDeveloper = styled.a`
  color: #FFF;
  text-decoration: none;
  border-bottom: 1px solid;
`
