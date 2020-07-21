import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/carrinho/cart.selectors';
import { toggleCartHidden } from '../../redux/carrinho/cart.actions';

import './carrinho-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'> 
			{
				cartItems.length ? (
				cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))
			) : <span className='empty-message'>carrinho vazio</span>
			}
		</div>
		<CustomButton onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		}}>
		CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));