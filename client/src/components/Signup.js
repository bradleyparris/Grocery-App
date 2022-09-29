import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Signup(){
    const [formState, setFormState] = useState({ username: '', email: '', password: '', reEnter: '' });

    const { username, email, password, reEnter } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

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

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    };

    return(
        <form id='signup-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' defaultValue={username} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' defaultValue={password}/>
            </div>
            <div>
                <label htmlFor='reEnterPass'>Re-enter Password:</label>
                <input type='password' name='reEnterPass' defaultValue={reEnter}/>
            </div>
            <button id='signup-button' className='btn' type='submit'>Signup</button>
        </form>
    );
}