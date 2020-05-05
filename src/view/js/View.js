import React from 'react';
import styles from '../css/View.module.scss'
import Section from './components/Section';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from './components/Footer';

const Page = (props) => {
  return (
    <div className={styles.container}>
      {props.pages.map((child, i) => {
        return (
          <Section key={i} docs={child.documentation} code={child.codeSnippets} anchorId={child.anchorId} />
        )
      })}
      <Footer />
    </div>
  )
}

const Routes = (props) => {
  return [...props.index.map((child, i) =>
    <Route exact key={i} path={`/${child.pageName}`}>
      <Page pages={child.content} />
    </Route>)
  //   ,
  // <Route>
  //   <Redirect to={`/${props.index[0].pageName}`} />
  // </Route>
  ]
}

const View = (props) => {
  return (
    <Switch>
      <Routes index={props.index} />
    </Switch>
  );
};

export default View;
