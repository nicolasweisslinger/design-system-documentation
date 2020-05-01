import React from 'react';
import Navbar from './navbar/js/Navbar';
import View from './view/js/View';
import './Bulma.sass'
import styles from './App.module.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { index } from './utils/page-indexer/index'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar index={index} />
        <View index={index} />
      </div>
    </Router>
  );
}

export default App;
