/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import productsContext from '../context/products/productsContext';
import Button from './Button';
import strings from '../constants/strings';
import utils from '../helpers/utils';
import constants from '../constants/constants';
import colors from '../constants/colors';
import API from '../api/api';

const CartFooter = ({ setMessage, setSuccess, setIsMessage }) => {
  const { cartProducts, clearCart } = useContext(productsContext);
  const sum = cartProducts.reduce((acc, current) => (acc + current.count * current.price), 0);

  const postOrder = async () => {
    try {
      await API.postOrder(cartProducts.map((item) => ({ id: item.id, count: item.count })));
      setMessage(strings.successOrder);
      setSuccess(true);
      clearCart();
    } catch (e) {
      const error = await e.json();
      setMessage(error.message);
      setSuccess(false);
    } finally {
      setIsMessage(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sum}>{strings.sum}</Text>
        <Text style={styles.sum}>{utils.getPrice(sum)}</Text>
      </View>
      <Button
        onPress={() => postOrder()}
        label={strings.cartButtons.order}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: colors.white,
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    paddingVertical: 10,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sum: {
    fontFamily: constants.fontMainBold,
    fontSize: 22,
    color: colors.blueMagenta,
  },
});

export default CartFooter;
