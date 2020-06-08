import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './carrinho/cart.reducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});