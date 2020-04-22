import React from 'react';
import styles from '../css/Content.module.scss'
import Section from './components/Section';

const Content = () => {
  return (
    <div className={styles.container}>
      <Section />
      <Section />
      <div className={styles.footer}>
        <div className={styles.background} />
      </div>
    </div>
  );
};

export default Content;
