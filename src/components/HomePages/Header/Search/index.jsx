import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from '../Header.module.sass'
import { searchItemSaga, setValuesInputSearch } from '../../../../actions/search';

function PostFilterForm() {

    const filter = useSelector( state => state.filter.filter)
    const search = useSelector( state => state.search.values)

    const dispatch = useDispatch()
    
    function handleSearchFilterChange(e) {
        const value = e.target.value;

        dispatch(setValuesInputSearch(value))

        dispatch(searchItemSaga({filter, value}))
    }
    return (
        <div>
            <form className={styles.form}>
                <input 
                    type="text" 
                    placeholder="Search a product"
                    value={search}
                    onChange={handleSearchFilterChange}    
                />
                <button type="submit" >
                    <i className="ri-search-line"></i>
                </button>
            </form>
        </div>
    );
}

export default PostFilterForm;