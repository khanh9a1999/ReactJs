import React from 'react';
import styles from '../FilterRating.module.sass'
import clsx from 'clsx'
import { useContext } from 'react'
import { StoreContext, actions } from '../../../../store'

function RatingOne({props}) {

    const [state, dispatch] = useContext(StoreContext)

    const { filter } = state

    function handleRatingOne(){
        dispatch(actions.setFilter({
            ...filter,
            _page: 1,
            _limit: 16,
            rating: props
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

export default RatingOne;