import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './login.css';
import { useHistory } from 'react-router-dom';
// import * sessionActions from '../../store/session';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logIn = () => {
        // dispatch to the store to attempt to log in, if successful send to a confirmation screen to check if in or not
        // dispatch(sessionActions.login());
        history.push('/confirmation')
    }

    return (
        <div className="login-wrapper">
            <div className="username-wrapper">
                <label>Username: </label>
                <input type="text" value={username} onChange={e => {setUsername(e.target.value)}}/>
            </div>
            <div className="password-wrapper">
                <label>Password: </label>
                <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
            </div>
            <input type="button" value="Log In" onClick={logIn}/>
        </div>
    )
}

export default Login;