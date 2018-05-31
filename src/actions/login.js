import {LOGIN_SUCCESS} from './actions';
import {LOGIN_FAILURE} from './actions';
import {LOGOUT} from './actions';

export const login = payload => {
  console.log('action creator involved');
  return {
    type: LOGIN_SUCCESS,
    user:{
        user_id: payload.id,
        avatar_url: payload.picture.data.url,
        name: payload.name,
        show_error_message: false
    }
  }
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
    user:{
      show_error_message: true
    }
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}