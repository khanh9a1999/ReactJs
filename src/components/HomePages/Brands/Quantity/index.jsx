import React from 'react'
import styles from '../Brands.module.sass'
import { useSelector } from 'react-redux'

function Quantity({brand}) {

    let brands = [];
    const listAllBrands = useSelector( state => state.brands.listAllBrands)

    listAllBrands.forEach((product) => {
        if(product.brand === brand){
            brands.push(product)
        }
    })

    return (
        <span className={styles.qty}>({brands.length})</span>       
    );
}

export default Quantity;