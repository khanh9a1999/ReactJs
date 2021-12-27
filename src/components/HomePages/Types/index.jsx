import React, { useState, useEffect} from 'react'
import styles from './Types.module.sass'
import Quantity from './Quantity'
import { memo } from 'react'
import { useContext } from 'react'
import { StoreContext, actions} from '../../../store'

function Types() {

    const [ state, dispatch] = useContext(StoreContext)

    const { products_types, filter } = state

    useEffect(() => {
        async function getProducts() {
            try {
                const requestUrl = 'http://localhost:3000/data'
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                dispatch(actions.setProductsTypes(responseJSON))
            } catch (err) {
                console.log('failse')
            }
        }
        getProducts()
    },[])

    let listType = []
    products_types.map((item) =>{
        listType.push(item.type)
    })

    let type = []
    listType.map((item) => {
        if(type.indexOf(item) == -1){
            type.push(item)
        }
    })

    type.sort()
    
    function handleType(e){
        let values = e.target.value
        if (e.target.checked){
            dispatch(actions.setFilter({
               ...filter,
                _page: 1,
                type: values
            }))
        } else{
            dispatch(actions.setFilter({
                 _page: 1,
                _limit: 16,
            }))
        }

    }

    return (
        <div className={styles.typeProducts}>
            <h2>Type</h2>
            <form action="">
                {type.map((item, index) => {
                    return(
                        <div key={index} className="form-check">
                            <input onClick={handleType} className="form-check-input" type="checkbox" value={item} id={item} />
                            <label className="form-check-label" htmlFor={item}>
                                {item}
                            </label>
                            <Quantity 
                                products_types={products_types} 
                                type={item}
                            />
                        </div>
                    )
                })}
            </form>
        </div>
    );
}

export default memo(Types);