/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import {
  FlatList, RefreshControl, StyleSheet,
} from 'react-native';

import ProductListItem from './ProductListItem';
import productsContext from '../context/products/productsContext';
import API from '../api/api';

const ProductsList = ({
  header, navigation, setError, setIsError,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const { init, filterProducts } = useContext(productsContext);

  const getProducts = async () => {
    try {
      const products = await API.getProducts();
      init(products);
      setIsError(false);
    } catch (e) {
      setIsError(true);
      setError(e.status);
    } finally {
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getProducts();
  };

  const renderItem = ({ item }) => (
    <ProductListItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      src={API.CONTENT_URL + (item.image.formats.small.url || item.image.formats.thumbnail.url)}
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
  content: {
    justifyContent: 'space-between',
  },
});

export default ProductsList;
