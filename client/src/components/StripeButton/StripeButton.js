import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	// Stripe requires price to be in cents.
	const priceForStripe = price * 100;

	const publishableKey = "pk_test_xyDIdNuDtRSMOQn1ZKcAptzp00eHEoR1rD";

	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Silva Clothing Store"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
		/>
	);
};

export default StripeButton;
