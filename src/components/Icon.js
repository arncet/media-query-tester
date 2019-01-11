import React from 'react'

// Components
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa'

// Styles
import { StyledIcon, SUCCESS_COLOR, WARNING_COLOR, ERROR_COLOR } from './Styled'

export const SuccessIcon = () => <StyledIcon><FaCheck color={SUCCESS_COLOR} /></StyledIcon>
export const WarningIcon = ({ tooltip }) => <StyledIcon data-rh={tooltip}><FaExclamationTriangle color={WARNING_COLOR} /></StyledIcon>
export const ErrorIcon = () => <StyledIcon><FaTimes color={ERROR_COLOR} /></StyledIcon>
