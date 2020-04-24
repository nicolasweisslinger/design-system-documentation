import React from 'react';
import styles from '../css/Navbar.module.scss'
import Item from './components/Item';

const Navbar = (props) => {
    return (
        <div className={styles.container}>
            {props.index.map((child, i) => {
                return(
                <Item key={i} to={`/${child.pageName}`} label={child.displayName} />
                )
            })}
        </div>
    )
}

export default Navbar;
