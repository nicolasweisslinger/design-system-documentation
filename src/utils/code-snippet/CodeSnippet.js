import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from './brigadStyle';
import styles from './CodeSnippet.module.scss'

const CodeSnippet = ({snippet, snippetTitle}) => {
  return (
    <div className={styles.container}>
      {snippetTitle && <div className={styles.title}>
        {snippetTitle}
      </div>}
      <SyntaxHighlighter language="tsx" style={syntaxStyle}>
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
