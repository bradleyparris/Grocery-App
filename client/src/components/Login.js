import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { validateEmail } from '../utils/helpers';

export default function Login(){
    const [formState, setFormState] = useState({ email: '', password: '' });

    const { email, password} = formState;

    const [login] = useMutation(LOGIN_USER);

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if(!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };

    return(
        <form id='login-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' defaultValue={password} onBlur={handleChange} />
            </div>
            <button id='login-button' className='btn' type='submit'>Login</button>
        </form>
    );
}