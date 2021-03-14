/* eslint-disable react/prop-types */
import React, {
  useRef, useContext, useEffect, useState,
} from 'react';
import {
  View, StyleSheet, StatusBar, TouchableOpacity, Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import productsContext from '../context/products/productsContext';
import Alert from '../components/Alert';
import Description from '../components/Description';
import colors from '../constants/colors';
import constants from '../constants/constants';
import API from '../api/api';

const MIN_HEIGHT_IMAGE = Math.round(constants.height * 0.6);
const MAX_HEIGHT_IMAGE = Math.round(constants.height * 0.91);

const DetailScreen = ({ navigation }) => {
  const heightLayout = useRef(0);
  const heightImage = useRef(new Animated.Value(MIN_HEIGHT_IMAGE)).current;
  const { currentProduct } = useContext(productsContext);
  const [product, setProduct] = useState(currentProduct);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [showDesc, setShowDesc] = useState(false);

  const getProduct = async () => {
    try {
      const response = await API.getProduct(currentProduct.id);
      setProduct(response);
      setIsError(false);
      setShowDesc(true);
    } catch (e) {
      setIsError(true);
      setError(e.status);
    }
  };

  useEffect(() => {
    getProduct();
  }, [currentProduct]);

  return (
    <>
      <StatusBar translucent barStyle="dark-content" backgroundColor={colors.transparent} />
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, { height: heightImage }]}
          source={{ uri: product.bigSrc }}
        />
        <TouchableOpacity style={styles.back} onPress={() => navigation()}>
          <Icon
            name="chevron-back-outline"
            size={30}
            color={colors.blueMagenta}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.refresh} onPress={() => getProduct()}>
          <Icon
            name="refresh-outline"
            size={30}
            color={colors.blueMagenta}
          />
        </TouchableOpacity>
        {showDesc && (
          <Description
            id={product.id}
            price={product.price}
            views={product.views}
            name={product.name}
            balance={product.balance}
            description={product.description}
            heightLayout={heightLayout}
            heightImage={heightImage}
            min={MIN_HEIGHT_IMAGE}
            max={MAX_HEIGHT_IMAGE}
          />
        )}
      </View>
      <Alert title={error} success={false} isOpen={isError} setIsOpen={setIsError} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
  },
  back: {
    position: 'absolute',
    top: 60,
    left: 25,
  },
  refresh: {
    position: 'absolute',
    top: 60,
    right: 25,
  },
});

export default DetailScreen;
