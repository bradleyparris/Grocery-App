import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import AccountInfo from './pages/Account';
import LogSignModal from './pages/Modal';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    const [accountSelected, setAccountSelected] = useState();

    return (
        <ApolloProvider client={client}>
            <Router>
                <div className='body-div'>
                    <Header
                    accountSelected={accountSelected}
                    setAccountSelected={setAccountSelected}
                    ></Header>
                    <main>
                    <Routes>
                        <Route
                            path='/login-or-signup'
                            element={<LogSignModal />}
                        />
                        <Route
                            path='/'
                            element={<Shop />}
                        />
                        <Route
                            path='/account'
                            element={<AccountInfo />}
                        />
                        <Route
                            path='*'
                            element={<NoMatch />}
                        />
                    </Routes>
                    </main>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
