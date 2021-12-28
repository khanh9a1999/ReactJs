import React, { useEffect, useState } from 'react';
import Category from './Category'
import Pagination from './Pagination'
import Products from './Products'
import Header from './Header'
import Types from './Types'
import Brands from './Brands'
import FilterRating from './FilterRating'
import Prices from './Prices'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../actions/filter'
import styles from './HomePages.module.sass'
import { setValuesInputSearch } from '../../actions/search'
import { setSelectedCategories } from '../../actions/categorys'
import { setValuesInputPricesGte, setValuesInputPricesLte } from '../../actions/prices'

function HomePage() {

    const filter = useSelector( state => state.filter.filter)
    const listInputBrands = useSelector( state => state.brands.listInputBrands)
    const listInputTypes = useSelector( state => state.types.listInputTypes)

    const options = useSelector( state => state.sort.options)

    const dispatch = useDispatch()
    
    const [isClearFilter, setIsClearFilter] = useState(false)

    useEffect(() => {
        const filterValuesArr = [filter.name_like, filter._sort, filter._order, filter.brand_like, filter.categories_like, filter.type_like, filter.rating_like, filter.price_range_like]
        const flag = filterValuesArr.some(value => value !== '')
        setIsClearFilter(flag)
    }, [filter])

    function handleClearFilter(){
        dispatch(setFilter({
            ...filter,
            name_like: '',
            _sort: '',
            _order: '',
            categories_like: '',
            brand_like: '',
            type_like: '',
            rating_like: '',
            price_range_like: ''
        }))
        dispatch(setValuesInputSearch(''))
        dispatch(setSelectedCategories(''))
        dispatch(setValuesInputPricesGte(0))
        dispatch(setValuesInputPricesLte(0))
        listInputBrands.forEach( (item) => item.checked = false )
        listInputTypes.forEach( (item) => item.checked = false )
        options.selected = true

    }

    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2">
                            {
                                isClearFilter && <button className={styles.clearFilterBtn} onClick={handleClearFilter}>Clear Filter</button>
                            }
                            <Category />
                            <Types />
                            <Brands />
                            <FilterRating />
                            <Prices />
                        </nav>
                        <Products />
                        <Pagination />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage
