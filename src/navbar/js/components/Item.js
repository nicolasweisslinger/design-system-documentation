import React from 'react';
import styles from '../../css/component/Item.module.scss'
import {
  NavLink,
  useLocation,
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import Collapse from '@kunukn/react-collapse'

const Item = (props) => {
  const location = useLocation()
  return (
    <NavLink to={props.to} activeClassName={styles.active}>
      <div className={styles.container}>
        <div className={styles.notch}>
          <div className={styles.top} />
          <div className={styles.bottom} />
        </div>
        <div className={`${styles.label} is-size-6`}>
          {props.label}
        </div>
        <Collapse
          isOpen={location.pathname === props.to}
          transition={`height 200ms`}
        >
          {props.anchors && props.anchors.length && <div className={styles.anchorList}>
            {props.anchors && props.anchors.map((child, i) =>
              <HashLink key={i} smooth to={`${props.to}#${child.anchor}`}>
                <div className={`${styles.anchor} is-size-6`}>
                  {child.displayName}
                </div>
              </HashLink>
            )}
          </div>}
        </Collapse>
      </div>
    </NavLink>
  );
};

export default Item;
