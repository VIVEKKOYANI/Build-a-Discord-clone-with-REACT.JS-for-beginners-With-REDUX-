import React from 'react'
import './Login.css'
import Discord from './Discord-logo.png';
import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
function Login() {
    const signIn = () => {
        //do clever google login shizz.....
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={Discord} width="100%" height="50%" alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
