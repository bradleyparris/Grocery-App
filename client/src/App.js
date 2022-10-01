import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop';
import AccountInfo from './components/Account';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    const [accountSelected, setAccountSelected] = useState();

    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}

export default App;
