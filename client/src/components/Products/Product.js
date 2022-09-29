import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Products({ category }){
    const { name } = category;

    return (
        <section>
            <h1>...................{capitalizeFirstLetter(name)} Section...............</h1>
        </section>
    )
}