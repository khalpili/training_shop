/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Empty from './Empty';
import FavoritesListItem from './FavoritesListItem';
import productsContext from '../context/products/productsContext';

const FavoritesList = ({ header }) => {
  const { favoriteProducts, removeFavorite } = useContext(productsContext);

  const renderItem = ({ item }) => (
    <FavoritesListItem
      key={item.id}
      name={item.name}
      price={item.price}
      src={item.src}
      balance={item.balance}
      remove={() => removeFavorite(item.id)}
    />
  );

  return (
    <>
      {favoriteProducts.length
        ? (
          <FlatList
            style={styles.container}
            ListHeaderComponent={header}
            data={favoriteProducts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
          />
        )
        : (
          <Empty header={header} />
        )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
  },
});

export default FavoritesList;
