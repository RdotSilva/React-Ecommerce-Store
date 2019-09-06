import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	// Stripe requires price to be in cents.
	const priceForStripe = price * 100;

	const publishableKey = "pk_test_xyDIdNuDtRSMOQn1ZKcAptzp00eHEoR1rD";

	return <div></div>;
};

export default StripeButton;
