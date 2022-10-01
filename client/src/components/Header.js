import React, { useState } from 'react';
// import LogSignModal from '../pages/Modal';

import { Link } from 'react-router-dom';

export default function Header(/*props*/){
    // const {
    //     accountSelected,
    //     setAccountSelected
    // } = props;

    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [navMobile, setNavMobile] = useState(false);

    // const toggleModal = () => {
    //     setIsModalOpen(!isModalOpen);
    // };

    const toggleNav = () => {
        setNavMobile(!navMobile);
    };

    return (
        <header>
            <div id='logo-div'>
                <img id='logo' src={require('../assets/Paradise-Orange.png')}></img>
                <h1 id="webTitle" className=''>Paradise Produce</h1>
            </div>
            <div id='hamburger-btn'>
                <i className='fa fa-bars hamburg' onClick={() => toggleNav()}></i>
            </div>
            <nav className={navMobile ? 'show':'hide'}>
                <i className='fa-solid fa-square-minus' id='x-mark-nav' onClick={()=> toggleNav()}></i>
                <Link to='/'>
                    <span>
                        Shop
                    </span>
                </Link>
                <Link to='/account'>
                    <span>
                        Account
                    </span>
                </Link>
                <Link to='/login-or-signup'>
                    <div id='loginBtn' 
                        className='btn-div'
                    >
                        <span className='' >Login</span>
                    </div>
                </Link>
                <button className=''>
                    <i className='fa fa-shopping-cart'></i>
                </button>
            </nav>
            {/* {isModalOpen &&
                (<Routes>
                    <Route
                        path='/login-or-signup'
                        element={<LogSignModal onClose={toggleModal} />}
                    />
                </Routes>
            )} */}
        </header>
    );
};

