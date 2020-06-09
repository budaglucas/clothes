import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../carrinho/carrinho.component';
import CartDropdown from '../carrinho-dropdown/carrinho-dropdown.component';
import { selectCartHidden } from '../../redux/carrinho/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to="/">
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>SHOP</Link>
			<Link className='option' to='/shop'>CONTACT</Link>
			{
				currentUser ?
				<div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link>
			}
			<CartIcon />
		</div>
		{hidden ? null: <CartDropdown />}
	</div>
);


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);