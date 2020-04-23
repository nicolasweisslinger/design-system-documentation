import React from 'react';
import styles from '../../css/component/Item.module.scss'
import {
  NavLink
} from "react-router-dom";

const Item = (props) => {
  return (
    <NavLink to={props.to} activeClassName={styles.active}>
      <div className={`${styles.container} is-size-6`}>
        {props.label}
      </div>
    </NavLink>
  );
};

export default Item;
