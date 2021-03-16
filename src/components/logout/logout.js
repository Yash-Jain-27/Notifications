import React from 'react';
import useToken from '../../utils/token';

export default function Logout() {
    const { removeToken } = useToken();

    return (
        <button type="submit" onClick={removeToken}>
            Logout
        </button>
    );
}