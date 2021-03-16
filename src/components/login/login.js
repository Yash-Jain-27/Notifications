import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';

const admins = require('../../data/users.json');

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [showErrorMessage, setErrorMessage] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        const userInfo = admins.users.filter((user) => {
            const fullName = user.first_name + user.last_name;

            return fullName === username && user.password === password;
        })[0];

        let token = null;

        if (userInfo) {
            token = userInfo.last_name + userInfo.password + userInfo.first_name;
        } else {
            setErrorMessage(true)
        }

        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button className="submitButton" type="submit">
                        Submit
                    </button>
                </div>
                {showErrorMessage && <div className="errorMessage"> Wrong Credentials! </div>}
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}