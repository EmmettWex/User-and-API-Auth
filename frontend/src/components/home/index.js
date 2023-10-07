import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.css';

const Home = () => {
    const history = useHistory();

    const handleLogin = (e) => {
        if (e.target.value === "Log in to your account") {
            history.push("/login")
        }

        if (e.target.value === "Sign up for a new account") {
            history.push("/signup")
        }
    }

    return (
        <div className="home-screen-wrapper">
            <input type="button" value="Log in to your account" onClick={handleLogin} />
            <input type="button" value="Sign up for a new account" onClick={handleLogin} />
        </div>
    )
}

export default Home;