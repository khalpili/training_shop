/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductsContext from './productsContext';
import productsReducer from './productsReducer';
import types from '../types';

const {
  INIT,
  ADD_CART,
  ADD_FAVORITE,
  REMOVE_CART,
  REMOVE_FAVORITE,
  FILTER,
  SET_CURRENT_PRODUCT,
  CHANGE_COUNT,
  CLEAR_CART,
} = types;

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
    const favoritesString = await AsyncStorage.getItem('favoriteProducts');
    const favorites = favoritesString ? await JSON.parse(favoritesString) : [];
    const cartsString = await AsyncStorage.getItem('cartProducts');
    const carts = cartsString ? await JSON.parse(cartsString) : [];

    const newFavorites = favorites.length
      ? favorites.filter((favorite) => products.find((product) => favorite.id === product.id))
      : [];

    const newCarts = carts.length
      ? carts.filter((cart) => products.find((product) => cart.id === product.id))
      : [];

    if (newFavorites !== favorites) AsyncStorage.setItem('favoriteProducts', JSON.stringify(newFavorites));
    if (newCarts !== carts) AsyncStorage.setItem('cartProducts', JSON.stringify(newCarts));

    dispatch({
      type: INIT,
      payload: {
        products,
        favorites: newFavorites,
        carts: newCarts,
      },
    });
  };

  const addCart = (id) => dispatch({ type: ADD_CART, payload: id });
  const addFavorite = (id) => dispatch({ type: ADD_FAVORITE, payload: id });
  const removeCart = (id) => dispatch({ type: REMOVE_CART, payload: id });
  const removeFavorite = (id) => dispatch({ type: REMOVE_FAVORITE, payload: id });
  const filter = (type, search) => dispatch({ type: FILTER, payload: { type, search } });
  const setCurrentProduct = (id) => dispatch({ type: SET_CURRENT_PRODUCT, payload: id });
  const changeCount = (id, count) => dispatch({ type: CHANGE_COUNT, payload: { id, count } });
  const clearCart = () => dispatch({ type: CLEAR_CART });

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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
