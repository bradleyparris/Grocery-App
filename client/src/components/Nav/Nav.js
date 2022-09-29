import React, { useState } from 'react';
import LogSignModal from '../Modal/Modal';

export default function Nav(props){
    const {
        accountSelected,
        setAccountSelected
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <header>
            <h1 id="webTitle" className=''>Paradise Produce</h1>
            <nav>
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

