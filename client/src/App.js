import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop';
import AccountInfo from './components/Account';

function App() {
    const [accountSelected, setAccountSelected] = useState();

    return (
        <div className='body-div'>
            <Nav
            accountSelected={accountSelected}
            setAccountSelected={setAccountSelected}
            ></Nav>
            <main>
            {!accountSelected ? (
                <>
                    <Shop></Shop>
                </>
            ) : (
                <AccountInfo></AccountInfo>
            )}
            </main>
        </div>
    );
}

export default App;
