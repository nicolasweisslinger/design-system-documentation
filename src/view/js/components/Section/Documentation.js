import React from 'react';
import styles from '../../../css/components/Documentation.module.scss'
import 'bulma/bulma.sass'

const Documentation = ({docs}) => {
  return (
    <div className={styles.container}>
      {docs}
    </div>
  );
};

export default Documentation;
