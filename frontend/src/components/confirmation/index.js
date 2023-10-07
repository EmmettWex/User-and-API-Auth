import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './confirmation.css';
import { useHistory } from 'react-router-dom';
// import * sessionActions from '../../store/session';

const Confirmation = () => {
    const sessionUser = useSelector(state => state.session ? state.session.user : false);
    
    return (
        <div className="confirmation-wrapper">
            {sessionUser ? <h1>You are logged in!</h1> : <h1>You are NOT logged in!</h1>}
        </div>
    )
}

export default Confirmation;