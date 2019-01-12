import React, { Component } from 'react'
import MonacoEditor from 'react-monaco-editor'

// Styles
import { StyledEditor, StyledSectionTitle } from './Styled'

class Editor extends Component {
  editorDidMount = editor => editor.focus()

  onChange = newValue => this.props.onChange(newValue)

  render() {
    const { code } = this.props
    return (
      <StyledEditor>
        <StyledSectionTitle>Editor</StyledSectionTitle>
        <MonacoEditor
          width="100%"
          height="250"
          language="css"
          theme="vs-dark"
          value={code}
          options={{
            selectOnLineNumbers: true,
            scrollBeyondLastLine: false
          }}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          ref='monaco'
          automaticLayout
        />
      </StyledEditor>
    )
  }
}

export default Editor
