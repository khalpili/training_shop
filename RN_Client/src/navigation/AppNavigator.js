import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet, View, TouchableOpacity, StatusBar,
} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import productsContext from '../context/products/productsContext';
import Alert from '../components/Alert';
import TabIcon from '../components/TabIcon';
import colors from '../constants/colors';
import strings from '../constants/strings';
import API from '../api/api';

const TAB_PRODUCTS = 'TAB_PRODUCTS';
const TAB_FAVORITES = 'TAB_FAVORITES';
const TAB_CART = 'TAB_CART';

const SCREEN_HOME = 'SCREEN_HOME';
const SCREEN_DETAIL = 'SCREEN_DETAIL';
const SCREEN_FAVOTITES = 'SCREEN_FAVOTITES';
const SCREEN_CART = 'SCREEN_CART';

const AppNavigator = () => {
  const [activeTab, setActiveTab] = useState(TAB_PRODUCTS);
  const [activeScreen, setActiveScreen] = useState(SCREEN_HOME);
  const [lastHomeScreen, setLastHomeScreen] = useState(SCREEN_HOME);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const { setCurrentProduct, init } = useContext(productsContext);

  const getProducts = async () => {
    try {
      const response = await API.getProducts();
      init(response);
      setIsError(false);
    } catch (e) {
      setIsError(true);
      setError(e.status);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const tabBarItems = [
    {
      key: TAB_PRODUCTS,
      iconName: 'grid',
      label: strings.tabBar.products,
      isFull: activeTab === TAB_PRODUCTS,
      isCart: false,
      onPress: () => {
        setActiveTab(TAB_PRODUCTS);
        if (activeScreen !== SCREEN_DETAIL && activeScreen !== SCREEN_HOME) {
          setActiveScreen(lastHomeScreen);
        } else {
          setActiveScreen(SCREEN_HOME);
        }
      },
    },
    {
      key: TAB_FAVORITES,
      iconName: 'star',
      label: strings.tabBar.favorites,
      isFull: activeTab === TAB_FAVORITES,
      isCart: false,
      onPress: () => {
        setActiveTab(TAB_FAVORITES);
        if (activeScreen !== SCREEN_FAVOTITES) { setActiveScreen(SCREEN_FAVOTITES); }
        if (activeScreen === SCREEN_DETAIL || activeScreen === SCREEN_HOME) {
          setLastHomeScreen(activeScreen);
        }
      },
    },
    {
      key: TAB_CART,
      iconName: 'cart',
      label: strings.tabBar.cart,
      isFull: activeTab === TAB_CART,
      isCart: true,
      onPress: () => {
        setActiveTab(TAB_CART);
        if (activeScreen !== SCREEN_CART) { setActiveScreen(SCREEN_CART); }
        if (activeScreen === SCREEN_DETAIL || activeScreen === SCREEN_HOME) {
          setLastHomeScreen(activeScreen);
        }
      },
    },
  ];

  const navigateDetail = (id) => {
    setActiveScreen(SCREEN_DETAIL);
    setCurrentProduct(id);
  };
  const navigateHome = () => setActiveScreen(SCREEN_HOME);

  const renderScreen = () => {
    switch (activeScreen) {
      case SCREEN_HOME:
        return <HomeScreen navigation={navigateDetail} />;
      case SCREEN_DETAIL:
        return <DetailScreen navigation={navigateHome} />;
      case SCREEN_FAVOTITES:
        return <FavoritesScreen />;
      case SCREEN_CART:
        return <CartScreen />;
      default:
        return null;
    }
  };

  const renderTabs = () => tabBarItems.map((item) => (
    <TouchableOpacity
      key={item.key}
      activeOpacity={activeTab !== item.key ? 0 : 1}
      onPress={() => activeTab !== item.key && item.onPress()}
    >
      <TabIcon
        iconName={item.iconName}
        label={item.label}
        isFull={item.isFull}
        isCart={item.isCart}
      />
    </TouchableOpacity>
  ));

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.screen}>
          {renderScreen()}
        </View>
        <View style={styles.tabBar}>
          {renderTabs()}
        </View>
        <Alert title={error} success={false} isOpen={isError} setIsOpen={setIsError} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.white,
  },
  screen: {
    height: '91%',
  },
  tabBar: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    width: '100%',
    height: '9%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 10,
  },
});

export default AppNavigator;
