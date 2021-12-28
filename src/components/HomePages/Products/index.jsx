import React, { useEffect } from 'react'
import styles from './Products.module.sass'
import clsx from 'clsx'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../../actions/filter'
import { setPaginations } from '../../../actions/paginations'
import { getListProductsSaga } from '../../../actions/products'
import SortBy from './SortBy'

function Products() {

    const products = useSelector( state => state.products.products)
    const filter = useSelector( state => state.filter.filter)
    const dispatch = useDispatch()
    const isLoading = useSelector( state => state.products.load)
    const isError = useSelector( state => state.products.error)

    useEffect(() => {
        dispatch(getListProductsSaga(filter))
        dispatch(setPaginations({
            _page: filter._page,
            _limit: 16,
            _totalRows: 10000
        }))
    },[filter])

    return (
        <div className={clsx(styles.product, "col-md-10")}>   
            <div className={clsx(styles.listProduct, "row")}>
                <div className={styles.sortPrice}>
                    <SortBy />
                </div>
                { isLoading ? <h1>Loadiing...</h1> : products.map((item, index) => (
                            <article key={index} className="col-md-3">
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
                {
                    isError && <h1>Ôi! Hỏng mất rồi</h1> 
                }
            </div>
        </div>
    );
}


export default memo(Products);
