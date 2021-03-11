/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import CartListItem from './CartListItem';
import productsContext from '../context/products/productsContext';

const CartList = ({ header }) => {
  const { cartProducts, removeCart } = useContext(productsContext);

  const renderItem = ({ item }) => (
    <CartListItem
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      src={item.src}
      balance={item.balance}
      count={item.count}
      remove={() => removeCart(item.id)}
    />
  );

  return (
    <FlatList
      style={styles.list}
      ListHeaderComponent={header}
      data={cartProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 70 + 145,
  },
});

export default CartList;
