import React from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import FavoritesList from '../components/FavoritesList';
import strings from '../constants/strings';

const FavoritesScreen = () => (
  <Container>
    <FavoritesList header={<Header title={strings.tabBar.favorites} />} />
  </Container>
);

export default FavoritesScreen;
