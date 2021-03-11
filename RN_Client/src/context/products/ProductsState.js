/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';

import ProductsContext from './productsContext';
import productsReducer from './productsReducer';
import PRODUCTS from '../../assets/data/products';
import types from '../types';

const {
  ADD_CART, ADD_FAVORITE, REMOVE_CART, REMOVE_FAVORITE, FILTER, SET_CURRENT_PRODUCT, CHANGE_COUNT,
} = types;

const ProductsState = ({ children }) => {
  const initialState = {
    products: PRODUCTS,
    filterProducts: PRODUCTS,
    favoriteProducts: PRODUCTS.filter((product) => product.isFavorite),
    cartProducts: PRODUCTS.filter((product) => product.isCart),
    currentProduct: PRODUCTS[0],
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const addCart = (id) => dispatch({ type: ADD_CART, payload: id });
  const addFavorite = (id) => dispatch({ type: ADD_FAVORITE, payload: id });
  const removeCart = (id) => dispatch({ type: REMOVE_CART, payload: id });
  const removeFavorite = (id) => dispatch({ type: REMOVE_FAVORITE, payload: id });
  const filter = (type, search) => dispatch({ type: FILTER, payload: { type, search } });
  const setCurrentProduct = (id) => dispatch({ type: SET_CURRENT_PRODUCT, payload: id });
  const changeCount = (id, count) => dispatch({ type: CHANGE_COUNT, payload: { id, count } });

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        filterProducts: state.filterProducts,
        favoriteProducts: state.favoriteProducts,
        cartProducts: state.cartProducts,
        currentProduct: state.currentProduct,
        addCart,
        addFavorite,
        removeCart,
        removeFavorite,
        filter,
        setCurrentProduct,
        changeCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
