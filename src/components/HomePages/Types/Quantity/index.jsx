import React from 'react';
import styles from '../Types.module.sass'

function Quantity({type, products}) {

    let types = [];

    products.forEach((product) => {
        if(product.type === type){
            types.push(product)
        }
    })

    return (
        <span className={styles.qty}>({types.length})</span>       
    );
}

export default Quantity;