import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/carrinho/cart.actions';

import { ReactComponent as Carrinho } from '../../assets/carrinho.svg';


import './carrinho.styles.scss';


const CartIcon = ( {toggleCartHidden} ) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
	<Carrinho className='shopping-icon' />
	<span className='item-count'>0</span>
		
	</div>

);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);