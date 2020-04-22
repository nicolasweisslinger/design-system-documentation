import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia as syntaxStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeSnippet.module.scss'

const CodeSnippet = ({snippet}) => {
  return (
    <div className={styles.container}>
      <SyntaxHighlighter language="jsx" style={syntaxStyle}>
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
