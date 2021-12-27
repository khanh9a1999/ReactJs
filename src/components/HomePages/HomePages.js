import React, { useState, useEffect } from 'react';
import Category from './Category'
import { CategoryData } from './SidebarData.js'
import Pagination from './Pagination'
import queryString from 'query-string'
import Products from './Products'
import Header from './Header'
import Types from './Types'
import Brands from './Brands'
import FilterRating from './FilterRating'
import Prices from './Prices'

function HomePage() {

    const [category, setCategory] = useState(CategoryData)
    const [products, setProducts] = useState([])
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 16,
        _totalRows: 1,
    })
   // 
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 16,
        name_like: '',
        type: [],
        brand: [],
        _sort: '',
        _order: '',
        price_range: []
    })
    // 

    function handlePageChange(newPage) {
        setFilter({
            ...filter,
            _page: newPage,
            _limit: 16
        })
        
    }

    useEffect(() => {
        async function getProducts() {
            try {
                const paramString = queryString.stringify(filter)
                const requestUrl = `http://localhost:3000/data?${paramString}`
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                setProducts(responseJSON)
                setPagination({
                    _page: filter._page,
                    _limit: 16,
                    _totalRows: 10000
                })
            } catch (err) {
                console.log('failse')
            }
        }
        getProducts()
    }, [filter])

    return (
        <div>
            <header>
                <Header 
                    filter={filter}
                    setFilter={setFilter} 
                />
            </header>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2">
                            <Category category={category}
                                filter={filter}
                                setFilter={setFilter}
                            />
                            <Types
                                filter={filter}
                                setFilter={setFilter} 
                            />
                            <Brands
                                filter={filter}
                                setFilter={setFilter}
                            />
                            <FilterRating 
                                setFilter={setFilter}
                            />
                            <Prices 
                                filter={filter}
                                setFilter={setFilter}
                            />
                        </nav>
                        <Products products={products}
                            filter={filter}
                            setFilter={setFilter} 
                        />
                        <Pagination  
                            pagination={pagination}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage
