import React, { useEffect } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default function LogSignModal({ onClose }){
    useEffect(() => {
        document.title = 'Paradise - Login/Signup';
    })
    return(
            <div className='modalContainer'>
                <div className='login-div'>
                    <h3 className='login-title title'>Login Form</h3>
                    <Login></Login>
                </div>
                <p>Don't have an account? Sign up here!</p>
                <div className='signup-div'>
                    <h3 className='signup-title title'>Signup Form</h3>
                    <Signup></Signup>
                </div>
                <button onClick={onClose} type='button'>Close</button>
            </div>
    );
}