import React/*, { useState }*/ from 'react';
import { capitalizeFirstLetter, convertToDecimal } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';


export default function Product({category}){
    const { name } = category;
    const { data } = useQuery(QUERY_PRODUCT);
    const products = data?.products || [];

    const currentProducts = products.filter((product) => product.category === name);

    function handleAddToCart(product){
        let cartArr = [];
        cartArr.push(product);
        console.log(cartArr);
    }

    return (
        <section>
            <h1>{capitalizeFirstLetter(name)} Section</h1>
            <div id='product-row'>
                {currentProducts.map(product => (
                    <div className='product-item card' key={product.name}>
                        <img className='product-img'
                            src={require(`../assets/Paradise-Orange.png`)}
                            alt={product.name}
                        />
                        <h4 className='product-name'>{capitalizeFirstLetter(product.name)}</h4>
                        <div className='container-product'>
                            <p className='product-price'>${convertToDecimal(product.price)}</p>
                            <span className='add-to-cart' onClick={handleAddToCart(product)}>Add to Cart</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}