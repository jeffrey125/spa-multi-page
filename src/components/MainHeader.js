import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navItems}>
          <li className={classes.navHome}>
            <Link to="/" className={classes.navLink}>
              Home
            </Link>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/welcome"
              activeClassName={classes.active}
              className={classes.navLink}
            >
              Welcome
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/products"
              activeClassName={classes.active}
              className={classes.navLink}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
