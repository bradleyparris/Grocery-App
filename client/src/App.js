import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import 'bulma/css/bulma.min.css';
import Shop from './components/Shop/Shop';
import AccountInfo from './components/Account/Account';

function App() {
    const [accountSelected, setAccountSelected] = useState();

    return (
        <div>
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
