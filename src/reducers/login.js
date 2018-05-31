import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../actions/actions';


const intialState = {
  user:{
    show_error_message: false
  }
}

const initialUser = {
  show_error_message: false,
  login_success: false,
  name: null,
  user_id: null,
  avatar_url: null
}

const login = (state = intialState, action) => {
    switch (action.type) {

      //Login succcess
      case LOGIN_SUCCESS:
        console.log(state);
        return (Object.assign({}, state, {
            user: Object.assign({}, state.user, {
                user_id: action.user.user_id,
                name: action.user.name,
                avatar_url: action.user.avatar_url,
                login_success: true,
                show_error_message: action.user.show_error_message
            })
        }))
      
      //login Failure
      case LOGIN_FAILURE:
        console.log('login failure',state);
        return (Object.assign({}, state, {
          user: Object.assign({}, state.user, {
            show_error_message: action.user.show_error_message
          })
        }))
      
      //logout - set every user attributes to null on logout
      case LOGOUT:
        console.log('login failure',state);
        return (Object.assign({}, state, {
          user: Object.assign({}, state.user, initialUser)
        }))

      //default
      default:
        return state
    }
  }
export default login
  