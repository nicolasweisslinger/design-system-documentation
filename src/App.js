import React from 'react';
import Navbar from './navbar/js/Navbar';
import View from './view/js/View';
import styles from './App.module.scss';
import './Bulma.sass'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <View />
    </div>
  );
}

export default App;
