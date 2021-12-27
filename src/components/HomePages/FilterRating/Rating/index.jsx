import React from 'react';
import styles from '../FilterRating.module.sass'
import clsx from 'clsx'

function Rating({props, setFilter}) {

    function handleRatingOne(){
        setFilter({
            _page: 1,
            _limit: 16,
            rating: 1
        })
    }

    return (
        <div>
            {
                [1,2,3,4,5].map( (item, index) => {
                    if(item <= props) {
                        return (
                            <i onClick={handleRatingOne} key={index} className={clsx(styles.starIcon, "ri-star-fill")}></i>
                        )
                    }else {
                        return (
                            <i key={index} className={clsx(styles.starIcon, "ri-star-line")}></i>
                        )
                    }
                })
            }
        </div>
    );
}

export default Rating;