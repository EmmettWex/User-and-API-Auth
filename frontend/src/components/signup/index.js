import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './signup.css';
import { useHistory } from 'react-router-dom';
// import * sessionActions from '../../store/session';

const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        // dispatch to the store to attempt to log in, if successful send to a confirmation screen to check if in or not
        // dispatch(sessionActions.signUp());
        history.push('/confirmation')
    }

    return (
        <div className="signup-wrapper">
            <div className="username-wrapper">
                <label>Username: </label>
                <input type="text" value={username} onChange={e => { setUsername(e.target.value) }} />
            </div>
            <div className="password-wrapper">
                <label>Password: </label>
                <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} />
            </div>
            <input type="button" value="Sign Up" onClick={signUp} />
        </div>
    )
}

export default Signup;