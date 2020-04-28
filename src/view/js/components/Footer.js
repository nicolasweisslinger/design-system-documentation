import React from 'react';
import styles from '../../css/components/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Any improvements to suggest ? <a rel="noopener noreferrer" target="_blank" href="https://github.com/nicolasweisslinger/design-system-documentation"> Go to the GitHub repo.</a></p>
    </div>
  );
};

export default Footer;
