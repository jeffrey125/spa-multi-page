import React from 'react';
import classes from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  const productDescriptionData = {
    p1: 'A Good Book',
    p2: 'A reliable Car',
    p3: 'A Comfy Carpet',
  };
  const productDetails = productDescriptionData[params.productId];

  return (
    <section>
      <h1 className={classes.sectionTitle}>Product Detail</h1>
      <p className={classes.productDescription}>{productDetails}</p>
    </section>
  );
};

export default ProductDetail;
