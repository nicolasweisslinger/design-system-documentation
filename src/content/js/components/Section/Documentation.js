import React from 'react';
import styles from '../../../css/components/Documentation.module.scss'
import 'bulma/bulma.sass'

const Documentation = () => {
  return (
    <div className={styles.container}>
      <h1 className="title is-1 is-spaced">Layout components</h1>
      <h2 className="subtitle is-4">Layout components are (almost) invisible components that allow you to assemble atomic components, such as buttons and inputs.</h2>
    </div>
  );
};

export default Documentation;
