import React, { useRef } from 'react';
import styles from '../Header.module.sass'
import { useContext } from 'react'
import { StoreContext, actions} from '../../../../store';

function PostFilterForm() {

    const [state, dispatch] = useContext(StoreContext)

    const { filter, searchItem } = state
    
    const typingTimeoutRef = useRef(null);

    function handleFilterChange(newFilter) {
        dispatch(actions.setFilter({
            ...filter,
            _page: 1,
            name_like: newFilter.searchItem
        }))
    }

    function handleSearchFilterChange(e) {
        const value = e.target.value;
        dispatch(actions.setSearchItem(
            value
        ))

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() =>{
            const formValues = {
                searchItem: value,
            };
            handleFilterChange(formValues)
        }, 300);
    }

    return (
        <div>
            <form className={styles.form}>
                <input 
                    type="text" 
                    placeholder="Search a product"
                    value={searchItem}
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