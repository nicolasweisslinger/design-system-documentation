import React from 'react';
import styles from '../../../css/components/Section/CodeSnippets.module.scss'
import CodeSnippet from '../../../../utils/code-snippet/CodeSnippet'

const CodeSnippets = ({ code }) => {
  return (
    <div className={styles.container}>
      {code && code.map((child, i) => {
        return (
          <div key={i} style={{ marginTop: child.marginTop || 16, marginBottom: child.marginBottom || 16 }}>
            <CodeSnippet snippet={child.code} snippetTitle={child.title}/>
          </div>
        )
      })
      }
    </div>
  );
};

export default CodeSnippets;
