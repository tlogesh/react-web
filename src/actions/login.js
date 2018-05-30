import {LOGIN_SUCCESS} from './actions';
export const login = payload => {
  console.log('action creator involved');
  return {
    type: LOGIN_SUCCESS,
    user:{
        user_id: payload.id,
        avatar_url: payload.picture.data.url,
        name: payload.name,
    }
  }
}
