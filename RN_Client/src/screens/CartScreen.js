import React, { useContext, useState } from 'react';

import productsContext from '../context/products/productsContext';
import Alert from '../components/Alert';
import Empty from '../components/Empty';
import Container from '../components/Container';
import CartList from '../components/CartList';
import Header from '../components/Header';
import CartFooter from '../components/CartFooter';
import strings from '../constants/strings';

const CartScreen = () => {
  const [isMessage, setIsMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
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
            <CartFooter
              setIsMessage={setIsMessage}
              setSuccess={setSuccess}
              setMessage={setMessage}
            />
          </>
        )
        : <Empty header={renderHeader()} />}
      <Alert
        title={message}
        success={success}
        isOpen={isMessage}
        setIsOpen={setIsMessage}
      />
    </Container>
  );
};

export default CartScreen;
