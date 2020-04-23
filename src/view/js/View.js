import React from 'react';
import styles from '../css/View.module.scss'
import Section from './components/Section';
import { index } from '../../content/index';
import {
  Switch,
  Route,
} from "react-router-dom";

const Page = (props) => {
  return (
    <div className={styles.container}>
      {props.pages.map((child, i) => {
        return (
          <Section key={i} docs={child.docs} code={child.code} />
        )
      })}
      <div className={styles.footer}>
        <div className={styles.background} />
      </div>
    </div>
  )
}

const Routes = (props) => {
  return (props.index.map((child, i) => {
    return (
    <Route path={child.routeName}>
      <Page pages={child.content} />
    </Route>
    )
  }))
}

const Content = () => {
  return (
    <Switch>
      <Routes index={index} />
    </Switch>
  );
};

export default Content;
