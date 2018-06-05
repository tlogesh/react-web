import React, {Component} from 'react';
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
        dispatch(logout());
    }
})

class Login extends Component{
    RenderLoginView() {
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
                        callback={this.props.responseFB} />
                    </div>
                    <br />
                    {this.props.user.show_error_message ? <div style={error_message}>Try logging in again!</div> : null}
                </div>
            </MuiThemeProvider>
        )
    }
    RenderUserView() {
      return(
        <MuiThemeProvider style={center_container_style}>
            <div style={center_container_style}>
                <Avatar facebookId={this.props.user.user_id} size={250} round={true}/>
                <br />
                <Link to="/abt"><RaisedButton label={'Continue as ' + this.props.user.name} primary={true}/></Link>
                <br />
                <Link to="/login"><RaisedButton label={'Logout'} primary={true} onClick={() => this.props.handleLogout()}/></Link>
            </div>
        </MuiThemeProvider>
      )
    }
    render(){
        if(!this.props.user.name || this.props.user.show_error_message){
            return this.RenderLoginView()
        }
        else{
            return this.RenderUserView()
        }
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