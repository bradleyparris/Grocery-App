import React, { useState } from 'react';
import LogSignModal from './Modal';

export default function Nav(props){
    const {
        accountSelected,
        setAccountSelected
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [navMobile, setNavMobile] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                <span className={`${accountSelected} shop`} onClick={() => setAccountSelected(false)}>
                    Shop
                </span>
                <span onClick={() => setAccountSelected(true)}>
                    Account
                </span>
                <div id='loginBtn' 
                    className='btn-div'
                    onClick={() => toggleModal()}
                >
                    <span className='' >Login</span>
                </div>
                <button className=''>
                    <i className='fa fa-shopping-cart'></i>
                </button>
            </nav>
            {isModalOpen &&
                (<LogSignModal onClose={toggleModal} />
            )}
        </header>
    );
};

