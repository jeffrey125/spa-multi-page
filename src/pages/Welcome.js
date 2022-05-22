import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <section>
      <h1 className={classes.sectionTitle}>The Welcome Page</h1>;
      <Route path="/welcome/new-user">
        <h2 className={classes.secondHeader}>Welcome New User</h2>
      </Route>
    </section>
  );
};

export default Welcome;
