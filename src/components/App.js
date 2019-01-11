import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Components
import Dashboard from './Dashboard'
import PreviewDocument from './PreviewDocument'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/preview-document" component={PreviewDocument}/>
    </Switch>
  </Router>
)

export default App
