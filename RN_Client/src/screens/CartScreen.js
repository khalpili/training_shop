import React, { useContext } from 'react';

import productsContext from '../context/products/productsContext';
import Empty from '../components/Empty';
import Container from '../components/Container';
import CartList from '../components/CartList';
import Header from '../components/Header';
import CartFooter from '../components/CartFooter';
import strings from '../constants/strings';

const CartScreen = () => {
  const { cartProducts } = useContext(productsContext);
  const renderHeader = () => <Header title={strings.tabBar.cart} />;

  return (
    <Container>
      {cartProducts.length
        ? (
          <>
            <CartList
              header={renderHeader()}
            />
            <CartFooter />
          </>
        )
        : <Empty header={renderHeader()} />}
    </Container>
  );
};

export default CartScreen;
