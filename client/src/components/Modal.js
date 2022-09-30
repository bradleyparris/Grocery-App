import React from 'react';
import Login from './Login';
import Signup from './Signup';

export default function LogSignModal({ onClose }){
    return(
        <div className='modalBackdrop'>
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
        </div>
    );
}