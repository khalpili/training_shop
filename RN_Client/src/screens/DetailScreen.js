/* eslint-disable react/prop-types */
import React, { useRef, useContext } from 'react';
import {
  View, StyleSheet, StatusBar, TouchableOpacity, Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import productsContext from '../context/products/productsContext';
import Description from '../components/Description';
import colors from '../constants/colors';
import constants from '../constants/constants';

const MIN_HEIGHT_IMAGE = Math.round(constants.height * 0.6);
const MAX_HEIGHT_IMAGE = Math.round(constants.height * 0.91);

const DetailScreen = ({ navigation }) => {
  const heightLayout = useRef(0);
  const heightImage = useRef(new Animated.Value(MIN_HEIGHT_IMAGE)).current;
  const { currentProduct } = useContext(productsContext);

  return (
    <>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, { height: heightImage }]}
          source={{ uri: currentProduct.bigSrc }}
        />
        <TouchableOpacity style={styles.back} onPress={() => navigation()}>
          <Icon
            name="chevron-back-outline"
            size={30}
            color={colors.blueMagenta}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.refresh}>
          <Icon
            name="refresh-outline"
            size={30}
            color={colors.blueMagenta}
          />
        </TouchableOpacity>
        <Description
          id={currentProduct.id}
          price={currentProduct.price}
          views={currentProduct.views}
          name={currentProduct.name}
          balance={currentProduct.balance}
          description={currentProduct.description}
          heightLayout={heightLayout}
          heightImage={heightImage}
          min={MIN_HEIGHT_IMAGE}
          max={MAX_HEIGHT_IMAGE}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: -StatusBar.currentHeight,
  },
  image: {
    width: '100%',
  },
  back: {
    position: 'absolute',
    top: 80,
    left: 25,
  },
  refresh: {
    position: 'absolute',
    top: 80,
    right: 25,
  },
});

export default DetailScreen;
