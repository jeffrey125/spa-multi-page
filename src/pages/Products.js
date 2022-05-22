import React from 'react';
import classes from './Products.module.css';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1 className={classes.sectionTitle}>The Products Page</h1>

      <ul className={classes.productList}>
        <li className={classes.productItem}>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li className={classes.productItem}>
          <Link to="/products/p2">A Car</Link>
        </li>
        <li className={classes.productItem}>
          <Link to="/products/p3">A Carpet</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
