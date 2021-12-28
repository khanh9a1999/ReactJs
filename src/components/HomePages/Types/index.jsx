import React, { useEffect} from 'react'
import styles from './Types.module.sass'
import Quantity from './Quantity'
import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../../actions/filter'
import { getListTypesSaga, setCheckedTypes } from '../../../actions/types'

function Types() {

    const listTypesFilted = useSelector( state => state.types.listTypesFilted)
    const filter = useSelector( state => state.filter.filter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListTypesSaga())
    },[])
    
    function handleType(e){
        let values = e.target.value
        let listInputTypes = document.querySelectorAll('input')
        if (e.target.checked){
            dispatch(setFilter({
               ...filter,
                _page: 1,
                type_like: values
            }))
            dispatch(setCheckedTypes(listInputTypes))
        } else{
            dispatch(setFilter({
                ...filter,
                type_like: ''
            }))
        }

    }

    return (
        <div className={styles.typeProducts}>
            <h2>Type</h2>
            <form action="">
                {listTypesFilted.map((item, index) => {
                    return(
                        <div key={index} className="form-check">
                            <input onClick={handleType} className="form-check-input" type="checkbox" value={item} id={item} />
                            <label className="form-check-label" htmlFor={item}>
                                {item}
                            </label>
                            <Quantity 
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