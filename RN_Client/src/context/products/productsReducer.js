/* eslint-disable no-case-declarations */
import types from '../types';

import constants from '../../constants/constants';

const { ALL_CLOTHES } = constants.types.typeСlothes;
const {
  ADD_CART, ADD_FAVORITE, CHANGE_COUNT, REMOVE_CART, REMOVE_FAVORITE, FILTER, SET_CURRENT_PRODUCT,
} = types;

const productsReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
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
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, state.products.find(
          (product) => product.id === action.payload,
        )],
      };
    case REMOVE_CART: return {
      ...state,
      cartProducts: state.cartProducts.filter(
        (product) => product.id !== action.payload,
      ),
    };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (product) => product.id !== action.payload,
        ),
      };
    case CHANGE_COUNT:
      const findProduct = state.cartProducts.find(
        (product) => product.id === action.payload.id,
      );
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter((product) => product.id !== action.payload.id),
          { ...findProduct, count: findProduct.count + action.payload.count },
        ],
      };
    case FILTER:
      return {
        ...state,
        filterProducts: state.products.filter(
          (product) => (action.payload.type === ALL_CLOTHES || product.type === action.payload.type)
            && (action.payload.search === ''
              || product.name.toLowerCase().indexOf(action.payload.search.toLowerCase()) !== -1),
        ),
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: state.products.find((product) => product.id === action.payload),
      };
    default: return state;
  }
};

export default productsReducer;
