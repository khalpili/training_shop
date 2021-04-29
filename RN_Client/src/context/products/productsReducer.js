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
  UPDATE_PRODUCT,
} = types;

const setItem = async (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

const filterProducts = ({ products, productType, searchValue }) => products.filter(
  (product) => (productType === ALL_CLOTHES
    || utils.getType(product.type) === productType)
    && (searchValue === '' || (product.name.toLowerCase().search(searchValue.toLowerCase()) !== -1)
    ),
);

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
        productType: ALL_CLOTHES,
        searchValue: '',
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
      const fState = ({
        ...state,
        productType: action.payload.type,
        searchValue: action.payload.search,
      });
      return {
        ...fState,
        filterProducts: filterProducts(fState),
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

    case UPDATE_PRODUCT: {
      const products = [].concat(state.products);
      const fInd = products.findIndex(({ id }) => id === action.payload.id);
      products.splice(
        typeof fInd === 'number' ? fInd : Infinity,
        1,
        action.payload,
      );

      return {
        ...state,
        products,
        filterProducts: filterProducts({
          productType: state.productType,
          searchValue: state.searchValue,
          products,
        }),
      };
    }

    default: return state;
  }
};

export default productsReducer;
