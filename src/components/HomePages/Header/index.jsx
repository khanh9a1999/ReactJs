import React from 'react'
import logo from '../../../assets/images/logo.png'
import clsx from 'clsx'
import styles from './Header.module.sass'
import PostFilterForm from './Search'
import { memo } from 'react'

function Header() {

    return (
        <div className= {styles.header}>
            <nav className={clsx(styles.navbar, 'd-flex')}>
                <div className= {clsx(styles.navbarContainer, 'd-flex')}>
                    <img src={logo} alt="logo" />
                    <h1>amazing</h1>
                    <PostFilterForm />
                </div>
            </nav>
        </div>
    )
}

export default memo(Header);