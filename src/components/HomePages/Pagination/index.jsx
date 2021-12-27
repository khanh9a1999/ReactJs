import React from 'react'
import Styles from './Pagination.module.sass'
import { useContext } from 'react'
import { StoreContext, actions } from '../../../store'

function Pagination() {

    const [state, dispatch] = useContext(StoreContext)

    const { paginations, filter } = state

    const { _page, _limit, _totalRows } = paginations
    
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        dispatch(actions.setFilter({
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