import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import ProductsState from './src/context/products/ProductsState';

const App = () => (
  <ProductsState>
    <AppNavigator />
  </ProductsState>
);

export default App;
