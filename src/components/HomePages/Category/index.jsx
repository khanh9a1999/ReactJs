import React from 'react'
import styles from './Sidebar.module.sass'
import clsx from 'clsx'
import { memo } from 'react'
import {  useContext } from 'react'
import { StoreContext, actions} from '../../../store';

function Category() {

    const [state, dispatch] = useContext(StoreContext);

    const { categorys, filter } = state

    function handleCategory(type) {
        dispatch(actions.setFilter({
            ...filter,
            _page: 1,
            categories: type,
        }))
    }

    return (
        <div className={styles.showResults}>
            <h2 className={styles.categoryTitle}>Show results for</h2>
            <div className="accordion" id="accordionExample">
                {categorys.map((category, index) => {
                    return (
                        <div className={styles.accordionItem} key={index}>
                            <h2 className="accordion-header" id={category.headingId}>
                                <button className={clsx(styles.accordionBtn, "accordion-button", "collapsed")} type="button" data-bs-toggle="collapse" data-bs-target={`#${category.collapseId}`} aria-expanded="false" aria-controls={category.collapseId}>
                                    <i className="ri-arrow-right-s-line">
                                    </i>
                                    <span onClick={() => handleCategory(category.title)}>{category.title}</span>
                                </button>
                            </h2>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default memo(Category);