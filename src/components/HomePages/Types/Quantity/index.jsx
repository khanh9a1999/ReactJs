import React from 'react';
import styles from '../Types.module.sass'
import { useSelector } from 'react-redux'


function Quantity({type}) {

    let types = [];
    const listAllTypes = useSelector( state => state.types.listAllTypes)

    listAllTypes.forEach((product) => {
        if(product.type === type){
            types.push(product)
        }
    })

    return (
        <span className={styles.qty}>({types.length})</span>       
    );
}

export default Quantity;