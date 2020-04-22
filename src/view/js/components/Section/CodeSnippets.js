import React from 'react';
import styles from '../../../css/components/CodeSnippets.module.scss'
import CodeSnippet from '../../../../utils/code-snippet/CodeSnippet'

const CodeSnippets = ({ code }) => {
  return (
    code.map((child) => {
      return (
        <div className={styles.container}>
          <div style={{ marginTop: child.marginTop }}>
            <CodeSnippet snippet={child.code} />
          </div>
        </div>
      )
    })
  );
};

export default CodeSnippets;
