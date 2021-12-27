import React, { useEffect } from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import styles from './Products.module.sass'
import clsx from 'clsx'
import { memo } from 'react'
import { useContext } from 'react'
import { StoreContext, actions } from '../../../store'

Products.propTypes = {
    products: PropTypes.array,
};

Products.defaultProps = {
    products: [],
}

function Products() {

    const [state, dispatch] = useContext(StoreContext)

    const { products, filter } = state

    useEffect(() => {
        async function getProducts() {
            try {
                const paramString = queryString.stringify(filter)
                const requestUrl = `http://localhost:3000/data?${paramString}`
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                dispatch(actions.setProducts(responseJSON))
                dispatch(actions.setPaginations({
                    _page: filter._page,
                    _limit: 16,
                    _totalRows: 10000
                }))
            } catch (err) {
                console.log('failse')
            }
        }
        getProducts()
    }, [filter])

    function handlePriceEsc(){
        dispatch(actions.setFilter({
            ...filter,
            _page: 1,
            _sort: 'price',
            _order: 'asc'
        }))
    }

    function handlePriceDesc(){
        dispatch(actions.setFilter({
            ...filter,
            _page: 1,
            _sort: 'price',
            _order: 'desc'
        }))
    }

    return (
        <div className={clsx(styles.product, "col-md-10")}>   
            <div className={clsx(styles.listProduct, "row")}>
                <div className={styles.sortPrice}>
                    <button onClick={handlePriceEsc}>
                        Sort by Price Esc
                    </button>
                    <button onClick={handlePriceDesc}>
                        Sort by Price Desc
                    </button>
                </div>
                {
                    products.map((item) => (
                            <article key={item.objectID} className="col-md-3">
                                <div className={styles.imgProduct}>
                                    <img src={item.image} alt="product" />
                                </div>
                                <div className="item-desc">
                                    <h2 className={styles.name}>{item.name}</h2>
                                    <div className={styles.ratePrice}>
                                        {
                                            [1,2,3,4,5].map((num, index) => {
                                                if(num <= item.rating) {
                                                    return (
                                                        <i key={index} className="ri-star-fill"></i>
                                                    )
                                                }else {
                                                    return (
                                                        <i key={index} className="ri-star-line"></i>
                                                    )
                                                }
                                            })
                                        }
                                        <span className={styles.price}>{item.price}$</span>
                                    </div>
                                </div>
                            </article>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default memo(Products);