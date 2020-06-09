import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/carrinho/cart.actions';
import { selectCartItemsCount } from '../../redux/carrinho/cart.selectors';

import { ReactComponent as Carrinho } from '../../assets/carrinho.svg';


import './carrinho.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
	<Carrinho className='shopping-icon' />
	<span className='item-count'>{itemCount}</span>
		
	</div>

);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);