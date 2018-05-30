import React from 'react'
import Login from '../containers/login'
import abtUs from '../components/abt'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <div>
    <main>
      <Route path="/login" component={Login} />
      <Route path="/abt" component={abtUs} />
    </main>
  </div>
)

export default App