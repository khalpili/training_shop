/* eslint-disable no-case-declarations */
import AsyncStorage from '@react-native-async-storage/async-storage';

import types from '../types';
import constants from '../../constants/constants';
import utils from '../../helpers/utils';

const { ALL_CLOTHES } = constants.types.typeСlothes;
const {
  INIT,
  ADD_CART,
  ADD_FAVORITE,
  CHANGE_COUNT,
  REMOVE_CART,
  REMOVE_FAVORITE,
  FILTER,
  SET_CURRENT_PRODUCT,
  CLEAR_CART,
} = types;

const setItem = async (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

const productsReducer = (state, action) => {
  let newProducts = [];
  switch (action.type) {
    case INIT:
      return {
        ...state,
        products: action.payload.products,
        filterProducts: action.payload.products,
        favoriteProducts: action.payload.favorites,
        cartProducts: action.payload.carts,
      };

    case ADD_CART:
      newProducts = {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          {
            ...state.products.find(
              (product) => product.id === action.payload,
            ),
            count: 1,
          },
        ],
      };
      setItem('cartProducts', newProducts.cartProducts);
      return newProducts;

    case ADD_FAVORITE:
      newProducts = {
        ...state,
        favoriteProducts: [...state.favoriteProducts, state.products.find(
          (product) => product.id === action.payload,
        )],
      };
      setItem('favoriteProducts', newProducts.favoriteProducts);
      return newProducts;

    case REMOVE_CART:
      newProducts = {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id !== action.payload,
        ),
      };
      setItem('cartProducts', newProducts.cartProducts);
      return newProducts;

    case REMOVE_FAVORITE:
      newProducts = {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (product) => product.id !== action.payload,
        ),
      };
      setItem('favoriteProducts', newProducts.favoriteProducts);
      return newProducts;

    case CHANGE_COUNT:
      const findProduct = state.cartProducts.find(
        (product) => product.id === action.payload.id,
      );
      newProducts = {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter((product) => product.id !== action.payload.id),
          { ...findProduct, count: findProduct.count + action.payload.count },
        ],
      };
      setItem('cartProducts', newProducts.cartProducts);
      return newProducts;

    case FILTER:
      return {
        ...state,
        filterProducts: state.products.filter(
          (product) => (action.payload.type === ALL_CLOTHES
            || utils.getType(product.type) === action.payload.type)
            && (action.payload.search === ''
              || product.name.toLowerCase().indexOf(action.payload.search.toLowerCase()) !== -1),
        ),
      };

    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: state.products.find((product) => product.id === action.payload),
      };

    case CLEAR_CART:
      setItem('cartProducts', []);
      return {
        ...state,
        cartProducts: [],
      };

    default: return state;
  }
};

export default productsReducer;
