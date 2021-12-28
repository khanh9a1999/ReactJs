import React, { useEffect, useState } from 'react'
import styles from './Prices.module.sass'
import { memo } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setFilter } from '../../../actions/filter'
import { getListPricesSaga, setValuesInputPricesLte, setValuesInputPricesGte } from '../../../actions/prices'

function Prices() {

    const listPricesFilted = useSelector( state => state.prices.listPricesFilted)
    const filter = useSelector( state => state.filter.filter)
    const valuesGte = useSelector( state => state.prices.valuesGte)
    const valuesLte = useSelector( state => state.prices.valuesLte)


    const dispatch = useDispatch()

    function handleFilterPrice (price){
        dispatch(setFilter({
            ...filter,
            _page: 1,
            price_range_like: price
        }))
    }

    useEffect(() => {
        dispatch(getListPricesSaga())
    },[])

    function handleValuesGte(e){
        let values = e.target.value
        dispatch(setValuesInputPricesGte(values))
    }

    function handleValuesLte(e){
        let values = e.target.value
        dispatch(setValuesInputPricesLte(values))
        
    }

    function handle2Price(){
        dispatch(setFilter({
            ...filter,
            price_gte: valuesGte,
            price_lte: valuesLte
        }))
    }


    return (
        <div className={styles.price}>
            <h2>Price</h2>
            {
                listPricesFilted.map((item, index) => {
                    return(
                        <p onClick={() => handleFilterPrice(item)} key={index}>${item}</p>
                    )
                })
            }
            <input type="number" 
                value={valuesGte}
                onChange={handleValuesGte}
                placeholder="price"
                className={styles.input}
            />
            <input type="number" 
                value={valuesLte}
                onChange={handleValuesLte}
                className={styles.input}
                
            />
            <button onClick={handle2Price}
                className={styles.button}
            >
                Submit
            </button>
        </div>
    );
}

export default memo(Prices);