import React from 'react';
import styles from '../../css/components/Section.module.scss'
import Documentation from './Section/Documentation';
import CodeSnippets from './Section/CodeSnippets';

const Section = ({docs, code, anchorId}) => {
  return (
    <div className={styles.container} id={anchorId || undefined}>
      <Documentation docs={docs}/>
      <CodeSnippets code={code}/>
    </div>
  );
};

export default Section;
