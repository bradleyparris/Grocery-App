
import React from 'react';


export default function Nav(props){
    const {
        accountSelected,
        setAccountSelected
    } = props;

    return (
        <header>
            <div className='hero'>
                <div className='hero-body'>
                    <div className='columns'>
                        <div className='column'>
                            <h1 className='title'>Paradise Produce</h1>
                        </div>
                        <nav>
                            <div className='column'>
                                <span className={`${accountSelected}`} onClick={() => setAccountSelected(false)}>
                                    Shop
                                </span>
                            </div>
                            <div className='column'>
                                <span onClick={() => setAccountSelected(true)}>
                                    Account
                                </span>
                            </div> 
                            <div className='column'>
                                <button className='button is-pulled-right'>
                                    <i className='fa fa-shopping-cart'></i>
                                </button>
                                <button className='button is-pulled-right'>Login</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
            <nav>
                
            </nav>
        </header>
    );
};

