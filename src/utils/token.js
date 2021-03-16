import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const deleteToken = userToken => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return {
        setToken: saveToken,
        token,
        removeToken: deleteToken,
    }
}