import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';
import Avatar from 'react-avatar';
import history from '../store/index'


const mapStateToProps = state => ({
    user: state.login.user,
})

const mapDispatchToProps = dispatch => ({
    responseFB: (response) => dispatch(
        login(response)
    ),
    handleRedirection: (event) => {
        history.push("/abt")   
    } 
})
  
const Login = ({ user, responseFB, handleRedirection}) => {
    if(!user){
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
                <RaisedButton label="Submit" primary={true} onClick={(event) => handleRedirection()}/>
                <br />
                <div>
                    <FacebookLogin
                    appId="165378730824562"
                    fields="name,email,picture"
                    callback={responseFB} />
                </div>
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
                <RaisedButton label={'Continue as ' + user.name} primary={true} onClick={(event) => handleRedirection(event)}/>
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
    top: 0, bottom: 0, left: 0, right: 0
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)