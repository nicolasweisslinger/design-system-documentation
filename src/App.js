import React from 'react';
import Navbar from './navbar/js/Navbar';
import View from './view/js/View';
import styles from './App.module.scss';
import './Bulma.sass'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { index } from './content/index'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar index={index}/>
        <View index={index}/>
      </div>
    </Router>
  );
}

export default App;
