import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import productsContext from '../context/products/productsContext';
import Button from './Button';
import strings from '../constants/strings';
import utils from '../helpers/utils';
import constants from '../constants/constants';
import colors from '../constants/colors';

const CartFooter = () => {
  const { cartProducts } = useContext(productsContext);
  const sum = cartProducts.reduce((acc, current) => (acc + current.count * current.price), 0);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sum}>{strings.sum}</Text>
        <Text style={styles.sum}>{utils.getPrice(sum)}</Text>
      </View>
      <Button
        onPress={() => console.log()}
        label={strings.cartButtons.order}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
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
