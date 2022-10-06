import React, { useState } from 'react';
import Product from './Product';
import Sidebar from './Sidebar';
// import { Route, Link } from 'react-router-dom';
// import { capitalizeFirstLetter } from '../utils/helpers';

export default function Shop(props){
    const {
        setCart,
        cart
    } = props;
    const [categories] = useState([
        {
            name: "dairy", 
        },
        {
            name: "meat",
        },
        {
            name: "produce",
        },
        {
            name: "dessert",
        }
    ]);
    
    // Products go under Sidebar
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    return(
        <div id='shop-div'>
            <Sidebar
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            ></Sidebar>
            <Product category={currentCategory} setCart={setCart} cart={cart}></Product>
        </div>
    )
}