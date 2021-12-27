import React, { useState, useEffect} from 'react'
import styles from './Types.module.sass'
import Quantity from './Quantity'
import { memo } from 'react'

function Types({filter, setFilter}) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            try {
                const requestUrl = 'http://localhost:3000/data'
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                setProducts(responseJSON)
            } catch (err) {
                console.log('failse')
            }
        }
        getProducts()
    },[])

    let listTypes = []
    products.map((item) => listTypes.push(item.type))

    let types = []
    listTypes.map((item) => {
        if(types.indexOf(item) === -1){
            types.push(item)
        }
    })

    types.sort()
    
    function handleFilterType(e){
        let values = e.target.value
        if (e.target.checked){
            setFilter({
                ...filter,
                _page: 1,
                type: values
            })
        } else{
            setFilter({
                _page: 1,
                _limit: 16,
            })
        }

    }

    return (
        <div className={styles.typeProducts}>
            <h2>Type</h2>
            <form action="">
                {types.map((type, index) => {
                    return(
                        <div key={index} className="form-check">
                            <input onClick={handleFilterType} className="form-check-input" type="checkbox" value={type} id={type} />
                            <label className="form-check-label" htmlFor={type}>
                                {type}
                            </label>
                            <Quantity 
                                products={products} 
                                type={type}
                            />
                        </div>
                    )
                })}
            </form>
        </div>
    );
}

export default memo(Types);