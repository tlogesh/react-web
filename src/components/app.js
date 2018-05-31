import React from 'react'
import Login from '../containers/login'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <main>
      <Route path="/login" component={Login} />
      <Route path="/abt" render={() => <div>This works baby!</div>} />
    </main>
  </div>
)

export default App