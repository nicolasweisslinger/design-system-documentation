import React from 'react';
import styles from '../../css/components/Section.module.scss'
import Documentation from './Section/Documentation';
import CodeSnippets from './Section/CodeSnippets';

const Section = () => {
  return (
    <div className={styles.container}>
      <Documentation />
      <CodeSnippets />
    </div>
  );
};

export default Section;
