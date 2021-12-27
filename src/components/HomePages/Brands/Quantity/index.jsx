import React from 'react'
import styles from '../Brands.module.sass'

function Quantity({brand, products}) {

    let brands = [];

    products.forEach((product) => {
        if(product.brand === brand){
            brands.push(product)
        }
    })

    return (
        <span className={styles.qty}>({brands.length})</span>       
    );
}

export default Quantity;