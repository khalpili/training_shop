/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import ProductListItem from './ProductListItem';
import productsContext from '../context/products/productsContext';

const ProductsList = ({ header, navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { filterProducts } = useContext(productsContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => { setRefreshing(false); }, 2000);
  };

  const renderItem = ({ item }) => (
    <ProductListItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      src={item.src}
      balance={item.balance}
      navigation={navigation}
    />
  );

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}
      columnWrapperStyle={styles.content}
      ListHeaderComponent={header}
      data={filterProducts}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
  },
  content: {
    justifyContent: 'space-between',
  },
});

export default ProductsList;
