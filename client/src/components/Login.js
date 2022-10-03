import React, { useState } from 'react';
import Auth from '../utils/auth';

export default function Login(){
    const [formState, setFormState] = useState({ username: '', password: '' });

    const { username, password} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'username'){
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    };

    return(
        <form id='login-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' defaultValue={username} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' defaultValue={password} onBlur={handleChange} />
            </div>
            <button id='login-button' className='btn' type='submit'>Login</button>
        </form>
    );
}