import Auth from '../utils/auth';
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

export default function Signup(){
    const [formState, setFormState] = useState({ userName: '', email: '', password: ''});

    const [addUser, { error }] = useMutation(ADD_USER);

    const { userName, email, password, /*reEnter*/ } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;


        setFormState({
        ...formState,
        [name]: value,
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const { data } = await addUser({
              variables: { ...formState }
            });
            Auth.login(data.addUser.token);
        } catch(e) {
            //console.log(e);
        }
            
    }
    

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
            {console.log(error) && error && <div>Sign up failed</div>}
        </div>
    );
}