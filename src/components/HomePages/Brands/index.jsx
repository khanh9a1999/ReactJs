import React, { useEffect } from 'react'
import styles from './Brands.module.sass'
import Quantity from './Quantity'
import { memo } from 'react'
import { useContext } from 'react'
import { StoreContext, actions} from '../../../store'

function Brands() {

    const [ state, dispatch] = useContext(StoreContext)

    const { products_brands, filter } = state

    useEffect(() => {
        async function getProducts() {
            try {
                const requestUrl = 'http://localhost:3000/data'
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
                dispatch(actions.setProductsBrands(responseJSON))
            } catch (err) {
                console.log('failse')
            }
        }
        getProducts()
    },[])

    let listBrand = []
    products_brands.forEach((item) =>
        listBrand.push(item.brand)
    )

    let brand = []
    listBrand.forEach((item) => {
        if(brand.indexOf(item) === -1){
            brand.push(item)
        }
    })

    brand.sort()

    function handleBrand(e){
        let values = e.target.value
        if (e.target.checked){
            dispatch(actions.setFilter({
                ...filter,
                _page: 1,
                brand: values
            }))
        } else{
            dispatch(actions.setFilter({
                _page: 1,
                _limit: 16
            }))
        }

    }

    return (
        <div className={styles.brandProducts}>
            <h2>Brand</h2>
            <form action="">
                {
                    brand.map((item, index) => {
                        return (
                            <div className="form-check" key={index}>
                                <input onClick={handleBrand} className="form-check-input" type="checkbox" value={item} id={item} />
                                <label className="form-check-label" htmlFor={item}>
                                    {item}
                                </label>
                                <Quantity
                                    products_brands={products_brands} 
                                    brand={item}
                                />
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default memo(Brands);