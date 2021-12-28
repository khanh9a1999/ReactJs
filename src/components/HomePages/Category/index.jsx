import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.sass'
import clsx from 'clsx'
import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setFilter} from '../../../actions/filter'
import { getListCategoriesSaga, setSelectedCategories } from '../../../actions/categorys'

function Category() {

    const listAllCategories = useSelector( state => state.categorys.listAllCategories)
    const selectedCategory = useSelector( state => state.categorys.selectedCategory)
    const filter = useSelector( state => state.filter.filter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListCategoriesSaga())
    },[])

    function handleCategory(type) {
        dispatch(setFilter({
            ...filter,
            _page: 1,
            categories_like: type,
        }))
        dispatch(setSelectedCategories(type))
    }

    function handleCategoryLv2(type2) {
        dispatch(setFilter({
            ...filter,
            categories_like: type2,
        }))
    }
  
    const renderCategory = (data) => {
        let category = []
        let categoryObj = {}
        data.forEach(element => {
            category.push(element.categories)
        });
        category.forEach(element => {
            if (!categoryObj[element[0]]) {
                if (element.length > 1) {
                    categoryObj[element[0]] = {
                        lv1: element[0],
                        lv2: [element[1]]
                    }
                } else {
                    categoryObj[element[0]] = {
                        lv1: element[0],
                        lv2: []
                    }
                }
            } else {
                if (element.length > 1) {
                    let lv2Arr = categoryObj[element[0]].lv2
                    if (!lv2Arr.includes(element[1])) {
                        categoryObj[element[0]] = {
                            ...categoryObj[element[0]],
                            lv2: [...lv2Arr, element[1]]
                        }
                    }
                }
            }
        })
        let categoryKeys = Object.keys(categoryObj)
        return categoryKeys.map((item, index) => {
            return (
                <li className="result-item"
                    onClick={() => handleCategory(item)}
                    key={index}
                >
                    <a href="#" className="result-link">
                        <i className="ri-arrow-right-s-line"></i>
                        { item }
                    </a>
                    { categoryObj[item].lv2 && 
                        <ul className={styles.subListCategory} style={{display: selectedCategory == item ? 'block' : 'none'}}>
                            { categoryObj[item].lv2.map((subItem, subIndex) => {
                                return (
                                    <li className="sub-item"key={subIndex}
                                        onClick={() => 
                                            handleCategoryLv2(subItem)
                                        }
                                    >
                                        <a href="#" className="sub-link"
                                        >
                                            <i className="ri-arrow-right-s-line"></i>
                                            { subItem }
                                        </a>
                                    </li>
                                )})
                            }
                        </ul>
                    }
                </li>
            )
        })
    }

    return (
        <div className={styles.showResults}>
            <h1 className={styles.title}>Category</h1>
            <ul className={styles.listCategory}>{ listAllCategories && renderCategory(listAllCategories) }</ul>
        </div>
    );
}

export default memo(Category);