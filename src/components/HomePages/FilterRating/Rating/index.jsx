import React from 'react';
import styles from '../FilterRating.module.sass'
import clsx from 'clsx'
import { setFilter } from '../../../../actions/filter'
import { useSelector, useDispatch } from 'react-redux'

function Rating({props}) {

    const filter = useSelector( state => state.filter.filter)
    const dispatch = useDispatch()

    function handleRatingOne(){
        dispatch(setFilter({
            ...filter,
            _page: 1,
            _limit: 16,
            rating_like: props
        }))
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