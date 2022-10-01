import React/*, { useState }*/ from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCE } from '../utils/queries';


export default function Products({ category }){
    const { name } = category;
    const { loading, data } = useQuery(QUERY_PRODUCE);
    const products = data?.produces || [];

    // const currentProducts = products.filter((product) => product.category = name);

    console.log(products);
    return (
        <section>
            <h1>{capitalizeFirstLetter(name)} Section</h1>
            <div id='product-row'>
                {products.map(product => (
                    <div className='product-item card' key={product.productName}>
                        <img className='product-img'
                            src={require(`../assets/Paradise-Orange.png`)}
                            alt={product.productName}
                        />
                        <h4 className='product-name'>{product.produceName}</h4>
                        <div className='container-product'>
                            <p className='product-price'>$MONEH</p>
                            <span className='add-to-cart'>Add to Cart</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}