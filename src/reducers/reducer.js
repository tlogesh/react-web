import { combineReducers } from 'redux'
import login from './login'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer,
  login
})
