import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <div className='checkout-page'>
    {cartItemsTotal}
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => 
        cartItem.name
      )
    }
    <div className='total'>
      <span>TOTAL: ${  cartItemsTotal }</span>
    </div>
  </div>
);

const mapStateToProps = () => createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);