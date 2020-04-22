import React from 'react';
import styles from '../../../css/components/CodeSnippets.module.scss'
import CodeSnippet from '../../../../utils/code-snippet/CodeSnippet'

const CodeSnippets = () => {
  const snippet = `<Box
  padding="large"
  borderRadius="large"
  shadow="shadow-high-elevation-down"
  marginVertical={["xx-large","none"]}
>
  {/* Coucou ma petite booby plume ❤️ */}
</Box>
`
  return (
    <div className={styles.container}>
      <CodeSnippet snippet={snippet} />
    </div>
  );
};

export default CodeSnippets;
