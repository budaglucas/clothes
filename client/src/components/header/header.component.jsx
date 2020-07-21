import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { 
	HeaderContainer, LogoContainer, OptionsContainer, OptionLink
} from './header.styles';

import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../carrinho/carrinho.component';
import CartDropdown from '../carrinho-dropdown/carrinho-dropdown.component';
import { selectCartHidden } from '../../redux/carrinho/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			{
			currentUser ? (
				<OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null: <CartDropdown />}
	</HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Header);