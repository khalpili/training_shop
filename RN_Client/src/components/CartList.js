/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import API from '../api/api';
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
      src={API.CONTENT_URL + (item.image.formats.small.url || item.image.formats.thumbnail.url)}
      balance={item.balance}
      count={item.count}
      remove={() => removeCart(item.id)}
    />
  );

  return (
    <FlatList
      style={styles.list}
      ListHeaderComponent={header}
      data={cartProducts.sort((prev, current) => prev.name > current.name)}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 145,
  },
});

export default CartList;
