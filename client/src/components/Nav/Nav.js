
import React from 'react';


export default function Nav(props){
    const {
        accountSelected,
        setAccountSelected
    } = props;

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
                <div id='loginBtn' className='btn-div'>
                    <span className='' >Login</span>
                </div>
                <button className=''>
                    <i className='fa fa-shopping-cart'></i>
                </button>
            </nav>

        </header>
    );
};

