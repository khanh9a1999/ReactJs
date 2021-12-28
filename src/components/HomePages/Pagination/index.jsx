import React from 'react'
import Styles from './Pagination.module.sass'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../../actions/filter'
function Pagination() {

    const paginations = useSelector( state => state.paginations.paginations)
    const filter = useSelector( state => state.filter.filter)
    const dispatch = useDispatch()

    const { _page, _limit, _totalRows } = paginations
    
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        dispatch(setFilter({
            ...filter,
            _page: newPage,
            _limit: 16
        }))
    }

    return (
        <div className={Styles.pagination}>
            <button
                disabled={ _page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>

            <button
                disabled={ _page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    );
}
export default Pagination;