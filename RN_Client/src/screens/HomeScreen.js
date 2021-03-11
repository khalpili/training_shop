/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';

import Container from '../components/Container';
import Search from '../components/Search';
import TabSort from '../components/TabSort';
import ProductsList from '../components/ProductsList';
import constants from '../constants/constants';
import productsContext from '../context/products/productsContext';

const { ALL_CLOTHES } = constants.types.typeСlothes;

const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState(ALL_CLOTHES);
  const { filter } = useContext(productsContext);

  useEffect(() => {
    filter(activeTab, searchValue);
  }, [searchValue, activeTab]);

  return (
    <Container>
      <ProductsList
        header={(
          <>
            <Search value={searchValue} setValue={setSearchValue} />
            <TabSort active={activeTab} setActive={setActiveTab} />
          </>
        )}
        navigation={navigation}
      />
    </Container>
  );
};

export default HomeScreen;
