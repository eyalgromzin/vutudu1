import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import './socialButtons.css'

export default class GoogleButton extends Component {

    responseGoogle = (response) => {
        // If responseType is not 'code', callback will return the GoogleAuth object.
        // If responseType is 'code', callback will return the offline token for use on your server.

        console.log(response);
    }

    render() {
        return (
        <div>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login with Google"
                className="socialButton"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        </div>
        )
    }
}

