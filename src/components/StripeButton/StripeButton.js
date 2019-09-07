import React from "react";
import StripeCheckout from "react-stripe-checkout";
import 

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
			name="Gear-Up Clothing"
			billingAddress
			shippingAddress
			image=""
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
