import React from 'react';
import styles from '../../../css/components/Section/CodeSnippets.module.scss'
import CodeSnippet from '../../../../utils/code-snippet/CodeSnippet'

const CodeSnippets = ({ code }) => {
  return (
    <div className={styles.container}>
      {code.map((child, i) => {
        return (
          <div key={i} style={{ marginTop: child.marginTop }}>
            <CodeSnippet snippet={child.code} />
          </div>
        )
      })
      }
    </div>
  );
};

export default CodeSnippets;
