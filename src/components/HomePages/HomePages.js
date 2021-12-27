import React from 'react';
import Category from './Category'
import Pagination from './Pagination'
import Products from './Products'
import Header from './Header'
import Types from './Types'
import Brands from './Brands'
import FilterRating from './FilterRating'
import Prices from './Prices'

function HomePage() {

    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2">
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
