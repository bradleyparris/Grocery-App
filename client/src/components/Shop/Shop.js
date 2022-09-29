import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Product';

export default function Shop(){
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
  
    const [currentCategory, setCurrentCategory] = useState(categories[0]);


    // Products go under Sidebar

    return(
        <div>
            <Sidebar
            categories={categories}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            ></Sidebar>
            <Products category={currentCategory}></Products>
        </div>
    )
}