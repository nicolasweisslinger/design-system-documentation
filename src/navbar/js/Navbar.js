import React from 'react';
import styles from '../css/Navbar.module.scss'
import Item from './components/Item';
import { index } from '../../content/index'

const Navbar = () => {
    return (
        <div className={styles.container}>
            {index.map((child, i) => {
                return(
                <Item key={i} to={child.routeName} label={child.navName} />
                )
            })}
        </div>
    )
}

export default Navbar;
