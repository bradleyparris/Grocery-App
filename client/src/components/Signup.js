import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

export default function Signup(){
    const [formState, setFormState] = useState({ username: '', email: '', password: ''});

    const [addUser, { error }] = useMutation(ADD_USER);

    const { username, email, password, /*reEnter*/ } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);
            console.log(isValid);

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

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div id='signup-div'>
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
            {console.log(error) && error && <div>Sign up failed</div>}
        </div>
    );
}