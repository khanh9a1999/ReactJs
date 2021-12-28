import React, { useState, useEffect } from 'react'
import styles from './Brands.module.sass'
import Quantity from './Quantity'
import { memo } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setFilter } from '../../../actions/filter'
import { getListBrandsSaga, setCheckedBrands } from '../../../actions/brands'

function Brands() {

    const listBrandsFilted = useSelector( state => state.brands.listBrandsFilted)
    const filter = useSelector( state => state.filter.filter)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getListBrandsSaga())
    },[])

    function handleBrand(e){
        let values = e.target.value
        let listInputBrands = document.querySelectorAll('input')
        if (e.target.checked){
            dispatch(setFilter({
                ...filter,
                _page: 1,
                brand_like: values
            }))
            dispatch(setCheckedBrands(listInputBrands))
        } else { 
            dispatch(setFilter({
                ...filter,
                brand_like: '',
            }))
        }
    }

    return (
        <div className={styles.brandProducts}>
            <h2>Brand</h2>
            <form action="">
                {
                    listBrandsFilted.map((item, index) => {
                        return (
                            <div className="form-check" key={index}>
                                <input onClick={handleBrand} className="form-check-input" type="checkbox" value={item} id={item} /> 
                                
                                <label className="form-check-label" htmlFor={item}>
                                    {item}
                                </label>
                                <Quantity
                                    brand={item}
                                />
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default memo(Brands);