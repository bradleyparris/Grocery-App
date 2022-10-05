import React from 'react';
import { capitalizeFirstLetter, convertToDecimal } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';


let count = 0;

export default function Product(props){
    const { category, setCart, cart } = props;
    const { name } = category;
    const { data } = useQuery(QUERY_PRODUCT);
    const products = data?.products || [];

    const currentProducts = products.filter((product) => product.category === name);
    
    const defineItem = product => {
        count = count + 1;
        addItemToCart({
            cartItemId: count,
            name: product.name,
            price: product.price,
            cateogry: product.category,
            description: product.description
        });
    }
    const addItemToCart = item => {
        setCart(current => [...current, item]);
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(name)} Section</h1>
            <div id='product-row'>
                {currentProducts.map(product => (
                    <div className='product-item card' key={product._id}>
                        <img className='product-img'
                            src={require(`../assets/Paradise-Orange.png`)}
                            alt={product.name}
                        />
                        <h4 className='product-name'>{capitalizeFirstLetter(product.name)}</h4>
                        <div className='container-product'>
                            <p className='product-price'>${convertToDecimal(product.price)}</p>
                            <span className='add-to-cart' onClick={() => defineItem(product)}>Add to Cart</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}