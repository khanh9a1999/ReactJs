import React, { useState, useEffect } from 'react'
import styles from './Prices.module.sass'
import { memo } from 'react'

function Prices({filter, setFilter}) {

    function handleFilterPrice (price){
        setFilter({
            ...filter,
            _page: 1,
            price_range: price
        })
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            try {
                const requestUrl = 'http://localhost:3000/data'
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                setProducts(responseJSON)
            } catch (err) {
                console.log('failse')
            }
        }
        getProducts()
    },[])

    let listPrices = []
    products.map((item) =>{
        listPrices.push(item.price_range)
    })

    let prices = []
    listPrices.map((item) => {
        if(prices.indexOf(item) == -1){
            prices.push(item)
        }
    })

    prices.sort()

    return (
        <div className={styles.price}>
            <h2>Price</h2>
            {
                prices.map((item, index) => {
                    return(
                        <p onClick={() => handleFilterPrice(item)} key={index}>${item}</p>
                    )
                })
            }
        </div>
    );
}

export default memo(Prices);