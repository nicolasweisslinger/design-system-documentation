import React from 'react';
import Navbar from './navbar/js/Navbar';
import View from './view/js/View';
import styles from './App.module.scss';
import './Bulma.sass'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <View />
      </div>
    </Router>
  );
}

export default App;
