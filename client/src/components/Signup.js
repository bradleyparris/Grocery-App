import Auth from '../utils/auth';
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';

export default function Signup(){
    const [formState, setFormState] = useState({ username: '', email: '', password: ''});

    const [addUser, { error }] = useMutation(ADD_USER);
    const [login] = useMutation(LOGIN_USER);

    const { userName, email, password, /*reEnter*/ } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);

            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if(!event.target.value.length){
                    setErrorMessage(`${event.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    };

    const autoLogin = async () => {
        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            
            Auth.login(data.addUser.token);
            autoLogin();
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div id='signup-div'>
        <form id='signup-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='userName'>Username:</label>
                <input type='text' name='userName' defaultValue={userName} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' defaultValue={password} onBlur={handleChange}/>
            </div>
            {/* <div>
                <label htmlFor='reEnterPass'>Re-enter Password:</label>
                <input type='password' name='reEnterPass' defaultValue={reEnter}/>
            </div> */}
            {errorMessage && (
                <div className='error-div'>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
            <button id='signup-button' className='btn' type='submit'>Signup</button>
        </form>
            {error && <div>Sign up failed</div>}
        </div>
    );
}