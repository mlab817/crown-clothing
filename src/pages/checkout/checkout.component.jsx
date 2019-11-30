import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <div className='checkout-page'>
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
      cartItems.length ? 
      cartItems.map(cartItem => 
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
      :
      <div className='empty-cart'>Your cart is empty</div>
    }
    <div className='total'>
      <span>TOTAL: ${ cartItemsTotal }</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 -  VCC: 123
    </div>
    <StripeCheckoutButton price={cartItemsTotal}/>
  </div>
);

const mapStateToProps = () => createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);