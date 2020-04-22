import React from 'react';
import styles from '../../css/components/Section.module.scss'
import Documentation from './Section/Documentation';
import CodeSnippets from './Section/CodeSnippets';

const Section = ({docs, code}) => {
  return (
    <div className={styles.container}>
      <Documentation docs={docs}/>
      <CodeSnippets code={code}/>
    </div>
  );
};

export default Section;
