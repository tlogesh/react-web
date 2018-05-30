import {LOGIN_SUCCESS} from '../actions/actions';
const login = (state = [], action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        console.log(state);
        return (Object.assign({}, state, {
            user: Object.assign({}, state.user, {
                user_id: action.user.user_id,
                name: action.user.name,
                avatar_url: action.user.avatar_url,
                login_success: true
            })
        }))
      default:
        return state
    }
  }
export default login
  