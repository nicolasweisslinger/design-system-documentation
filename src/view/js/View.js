import React from 'react';
import styles from '../css/View.module.scss'
import Section from './components/Section';
import { layoutComponentsContent } from '../../content/index'

const Content = () => {
  console.log(layoutComponentsContent)
  return (
    <div className={styles.container}>
      {layoutComponentsContent.map((child) => {
        return (
          <Section docs={child.docs} code={child.code} />
        )
      })}
      <div className={styles.footer}>
        <div className={styles.background} />
      </div>
    </div>
  );
};

export default Content;
