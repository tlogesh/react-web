import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { loginFailure } from '../actions/login';
import { logout } from '../actions/login';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';


const mapStateToProps = state => ({
    user: state.login.user
})

const mapDispatchToProps = dispatch => ({
    responseFB: (response) => {
        if(response.name){
          dispatch(login(response));
        }
        else{
          dispatch(loginFailure(response));
        }
    },
    handleOnSubmit: (obj) =>{
        //should be doing the validation of form here and dispatch an login action
    },
    handleLogout:() => {
        console.log('logout called');
        dispatch(logout());
    },
})
  
const Login = ({ user, responseFB, handleRedirection, handleLogout}) => {
    if(!user.name || user.show_error_message){
        return (
            <MuiThemeProvider style={center_container_style}>
            <div style={center_container_style}>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                />
                <br />
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                />
                <br />
                <RaisedButton label="Submit" primary={true} onClick={(event) => this.props.handleOnSubmit()}/>
                <br />
                <div>
                    <FacebookLogin
                    appId="165378730824562"
                    fields="name,email,picture"
                    callback={responseFB} />
                </div>
                <br />
                {user.show_error_message ? <div style={error_message}>Try logging in again!</div> : null}
            </div>
            </MuiThemeProvider>
        )
    }
    else{
      return(
        <MuiThemeProvider style={center_container_style}>
            <div style={center_container_style}>
                <Avatar facebookId={user.user_id} size={250} round={true}/>
                <br />
                <Link to="/abt"><RaisedButton label={'Continue as ' + user.name} primary={true}/></Link>
                <br />
                <Link to="/login"><RaisedButton label={'Logout'} primary={true} onClick={() => handleLogout()}/></Link>
            </div>
        </MuiThemeProvider>
      )
    }
}

const center_container_style = {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',   
    alignItems: 'center',
    position: "absolute",
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0
};

const error_message = {
    color: 'red',
    fontStyle: 'italic'
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)