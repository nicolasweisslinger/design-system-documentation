import React from 'react';
import Navbar from './navbar/js/Navbar';
import Content from './content/js/Content';
import styles from './App.module.scss';
import './Bulma.sass'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
