import React from 'react'
import logo from '../../../assets/images/logo.png'
import clsx from 'clsx'
import styles from './Header.module.sass'
import PostFilterForm from './Search'
import PropTypes from 'prop-types'
import { memo } from 'react'

Header.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func,
}

function Header({filter, setFilter}) {

    function handleFilterChange(newFilter) {
        setFilter({
            ...filter,
            _page: 1,
            name_like: newFilter.searchItem
        })
    }

    return (
        <div className= {styles.header}>
            <nav className={clsx(styles.navbar, 'd-flex')}>
                <div className= {clsx(styles.navbarContainer, 'd-flex')}>
                    <img src={logo} alt="logo" />
                    <h1>amazing</h1>
                    <PostFilterForm  onSubmit={handleFilterChange} />
                </div>
            </nav>
        </div>
    )
}

export default memo(Header);