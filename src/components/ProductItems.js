import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { setProducts } from '../reducers/coreReducer';

const ProductItems = ({ products, isProductsLoading, initPage }) => {
  useEffect(() => {
    initPage();
  }, []);

  if (isProductsLoading) {
    return 'LOADING...';
  }

  // if (Array.isArray(products) && !products.length) {
  //   return 'NO PRODUCTS FOUND';
  // }

  return (
    <div>
      {products.map(product => {
        return (
          <ProductItem
            id={product.id}
            prodName={product.prodName}
            headImg={product.headImg}
            shortDescription={product.shortDescription}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.core.products,
    isProductsLoading: state.core.isProductsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initPage: () => dispatch(setProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductItems);