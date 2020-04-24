import React from 'react';
import styles from '../css/View.module.scss'
import Section from './components/Section';
import {
  Switch,
  Route,
} from "react-router-dom";

const Page = (props) => {
  return (
    <div className={styles.container}>
      {props.pages.map((child, i) => {
        return (
          <Section key={i} docs={child.Documentation} code={child.codeSnippets} />
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
    <Route key={i} path={`/${child.pageName}`}>
      <Page pages={child.content} />
    </Route>
    )
  }))
}

const View = (props) => {
  return (
    <Switch>
      <Routes index={props.index} />
    </Switch>
  );
};

export default View;
