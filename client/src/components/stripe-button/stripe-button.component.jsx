import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 	
'pk_test_51GseFwKE709iGZ8V4E79bFgN9FKfRfDVTaK5sPgvpSszmeM5NVpSciUpdIGqKtTGRXllJhig9HQqo4CJNNwAWGDR00oXSAZo92'

const onToken = token => {
	axios({
		url: 'payment', 
		method: 'post',
		data: {
			amount: priceForStripe,
			token
		}
	})
	.then(response => {
		alert('sucesso');
	})
	.catch(error => {
		console.log('aerro: ', error);
		alert('algo deu errado com o pagamento');
	});
};


return (
	<StripeCheckout 
		label='Pay Now'
		name='eCommerce.'
		billingAddress
		shippingAddress
		image='https://svgshare.com/i/CUz.svg'
		description={`total $${price}`}
		amount={priceForStripe}
		panelLabel= 'Pay Now'
		token={onToken}
		stripeKey={publishableKey}
	/>
);
};

export default StripeCheckoutButton;