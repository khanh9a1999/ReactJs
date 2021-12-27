import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../Header.module.sass'

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {

    const { onSubmit } = props;
    const [searchItem, setSearchItem] = useState('');
    const typingTimeoutRef = useRef(null);


    function handleSearchFilterChange(e) {
        const value = e.target.value;
        setSearchItem(value)

        if(!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() =>{
            const formValues = {
                searchItem: value,
            };
            onSubmit(formValues)
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