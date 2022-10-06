import React from 'react';

export default function Cart(props){
    const { cartSelected, setCartSelected, cart } = props;

    const toggleModal = () => {
        setCartSelected(!cartSelected)
    }
    const checkout = () => {
        console.log(cart);
        if(sessionStorage.length === 1){
            console.log(JSON.stringify(cart));
        }
    }
    return (
        <article>
            {cartSelected && (
                <div className='modalBackdrop'>
                    <div className='modalContainer'>
                        <ul>
                            {cart.map((myCart) => (
                                <li key={myCart.cartItemId}>
                                    <div className='product-item card'>
                                        {myCart.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={toggleModal} type='button'>Close</button>
                        <button onClick={checkout} type='button'>Checkout</button>
                    </div>
                </div>
            )}
        </article>
    )
}