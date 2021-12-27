import React, { useState, useEffect } from 'react'
import styles from './Prices.module.sass'
import { memo } from 'react'
import { useContext } from 'react'
import { StoreContext, actions} from '../../../store'

function Prices() {

    const [ state, dispatch] = useContext(StoreContext)
    const { products_prices, filter } = state

    function handleFilterPrice (price){
        dispatch(actions.setFilter({
            ...filter,
            _page: 1,
            price_range: price
        }))
    }

    useEffect(() => {
        async function getProducts() {
            try {
                const requestUrl = 'http://localhost:3000/data'
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                dispatch(actions.setProductsPrices(responseJSON))
            } catch (err) {
                console.log('failse')
            }
        }
        getProducts()
    },[])

    let listPrices = []
    products_prices.map((item) =>{
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