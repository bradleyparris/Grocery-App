import React/*, { useState }*/ from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCE } from '../utils/queries';


export default function Products({ category }){
    const { name } = category;
    const { loading, data } = useQuery(QUERY_PRODUCE);
    const products = data?.produces || [];
    // const [products] = useState([
    //     {
    //         productName: 'Cheese',
    //         category: 'dairy',
    //         price: 1.23
    //     },
    //     {
    //         productName: 'Cheesiest Cheese',
    //         category: 'dairy',
    //         price: 1
    //     },
    //     {
    //         productName: 'Milk',
    //         category: 'dairy',
    //         price: 1
    //     },
    //     {
    //         productName: 'BEST Milk',
    //         category: 'dairy',
    //         price: 1
    //     },
    //     {
    //         productName: 'Ice Cream and Cakey Cake',
    //         category: 'dessert',
    //         price: 200
    //     },
    //     {
    //         productName: 'Gimme BEEF BURGER',
    //         category: 'meat',
    //         price: 0.12
    //     },
    //     {
    //         productName: 'Paradise Oranges',
    //         category: 'produce',
    //         price: 0.01
    //     }
    // ]);

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