import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import Cart from './components/Cart';
import AccountInfo from './pages/Account';
import LogSignModal from './pages/LoginSignup';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = sessionStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    // const [accountSelected, setAccountSelected] = useState();
    const [cartSelected, setCartSelected] = useState(false);
    const cartInitialState = [];
    const [cart, setCart] = useState(cartInitialState);

    return (
        <ApolloProvider client={client}>
            <Router>
                <div className='body-div'>
                    <Header
                    // accountSelected={accountSelected}
                    // setAccountSelected={setAccountSelected}
                    // cartSelected={cartSelected}
                    setCartSelected={setCartSelected}
                    ></Header>
                    <main>
                    <Routes>
                        <Route
                            path='/login-or-signup'
                            element={<LogSignModal />}
                        />
                        <Route
                            path='/'
                            element={<Shop setCart={setCart} cart={cart}/>}
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
                    <Cart setCartSelected={setCartSelected} cartSelected={cartSelected} cart={cart}/>
                    </main>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
