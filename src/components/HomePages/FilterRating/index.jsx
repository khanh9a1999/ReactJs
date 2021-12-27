import React from 'react'
import Rating from './Rating'
import styles from './FilterRating.module.sass'
import { memo } from 'react'

function FilterRating() {
    return (
        <div className={styles.filterRating}>
            <h2>Ratings</h2>
            {
                [1,2,3,4,5].map( (item, index) => (
                    <Rating 
                        key={index}
                        props={item}
                    />
                ))
            }
            
        </div>
    );
}

export default memo(FilterRating);