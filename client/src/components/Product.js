import React from 'react';
import { capitalizeFirstLetter, convertToDecimal } from '../utils/helpers';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';
import { ADD_CARTITEM } from '../utils/mutations';
import Auth from '../utils/auth';

let count = 0;

export default function Product(props){
    const { category, setCart, cart } = props;
    const { name } = category;
    const { data } = useQuery(QUERY_PRODUCT);
    const [addItem] = useMutation(ADD_CARTITEM);
    const products = data?.products || [];

    const currentProducts = products.filter((product) => product.category === name);
    
    const defineItem = product => {
        count = count + 1;
        addItemToCart({
            cartItemId: count,
            _id: product._id,
            name: product.name,
            price: product.price,
            category: product.category
        });
    }
    const addItemToCart = async (item) => {
        setCart(current => [...current, item]);
        // console.log(`Name: ${item.name}
        // Price: ${item.price}
        // Item ID: ${item._id}
        // `);
        // if(Auth.loggedIn()){
        //     try {
        //         const { data } = await addItem({
        //             variables: {...item}
        //         });
        //         Auth.getToken(data.addItem);
        //     } catch(e) {
        //         console.error(e);
        //     }
        // }
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