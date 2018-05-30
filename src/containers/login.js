import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';
import Avatar from 'react-avatar';


const mapStateToProps = state => ({
    user: state.login.user,
})

const mapDispatchToProps = dispatch => ({
    responseFB: (response) => dispatch(
        login(response)
    ),
    handleLoginSubmit: (event) => {
        console.log(event);
    } 
})
  
const Login = ({ user, responseFB, handleLoginSubmit}) => {
    if(!user){
        return (
            <MuiThemeProvider>
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
                <RaisedButton label="Submit" primary={true} onClick={(event) => handleLoginSubmit(event)}/>
                <br />
                <div>
                    <FacebookLogin
                    appId="165378730824562"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFB} />
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
    else{
      return(
        <MuiThemeProvider>
            <div style={center_container_style}>
                <Avatar facebookId={user.user_id} size="250" round={true}/>
                <br />
                <RaisedButton label={'Continue as ' + user.name} primary={true} onClick={(event) => handleLoginSubmit(event)}/>
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
    marginTop: 375
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)