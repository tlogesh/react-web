import React from 'react'
import Login from '../containers/login'
import { Route, Redirect } from 'react-router-dom'

const App = () => (
  <div>
    <main>
      <Redirect from="/" to="login" />
      <Route path="/login" component={Login} />
      <Route path="/abt" render={() => <div>This works baby!</div>} />
    </main>
  </div>
)

export default App