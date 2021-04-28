/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductsContext from './productsContext';
import productsReducer from './productsReducer';
import types from '../types';

const ProductsState = ({ children }) => {
  const initialState = {
    products: [],
    filterProducts: [],
    favoriteProducts: [],
    cartProducts: [],
    currentProduct: {},
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const init = async (products) => {
    const favorites = JSON.parse(await AsyncStorage.getItem('favoriteProducts') || '[]');
    const carts = JSON.parse(await AsyncStorage.getItem('cartProducts') || '[]');

    const newFavorites = favorites.length
      ? favorites.filter((favorite) => products.find((product) => favorite.id === product.id))
      : [];

    const newCarts = carts.length
      ? carts.filter((cart) => products.find((product) => cart.id === product.id))
      : [];

    if (newFavorites !== favorites) AsyncStorage.setItem('favoriteProducts', JSON.stringify(newFavorites));
    if (newCarts !== carts) AsyncStorage.setItem('cartProducts', JSON.stringify(newCarts));

    dispatch({
      type: types.INIT,
      payload: {
        products,
        favorites: newFavorites,
        carts: newCarts,
      },
    });
  };

  const addCart = (id) => dispatch({ type: types.ADD_CART, payload: id });
  const addFavorite = (id) => dispatch({ type: types.ADD_FAVORITE, payload: id });
  const removeCart = (id) => dispatch({ type: types.REMOVE_CART, payload: id });
  const removeFavorite = (id) => dispatch({ type: types.REMOVE_FAVORITE, payload: id });
  const filter = (type, search) => dispatch({ type: types.FILTER, payload: { type, search } });
  const setCurrentProduct = (id) => dispatch({ type: types.SET_CURRENT_PRODUCT, payload: id });
  const changeCount = (id, count) => dispatch({ type: types.CHANGE_COUNT, payload: { id, count } });
  const clearCart = () => dispatch({ type: types.CLEAR_CART });
  const updateProduct = (payload) => dispatch({ type: types.UPDATE_PRODUCT, payload });
  const addProduct = (payload) => dispatch({ type: types.ADD_PRODUCT, payload });

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        filterProducts: state.filterProducts,
        favoriteProducts: state.favoriteProducts,
        cartProducts: state.cartProducts,
        currentProduct: state.currentProduct,
        init,
        addCart,
        addFavorite,
        removeCart,
        removeFavorite,
        filter,
        setCurrentProduct,
        changeCount,
        clearCart,
        updateProduct,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
