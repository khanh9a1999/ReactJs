import React from 'react'
import styles from '../Brands.module.sass'

function Quantity({brand, products_brands}) {

    let brands = [];

    products_brands.forEach((product) => {
        if(product.brand === brand){
            brands.push(product)
        }
    })

    return (
        <span className={styles.qty}>({brands.length})</span>       
    );
}

export default Quantity;