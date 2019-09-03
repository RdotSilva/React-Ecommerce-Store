import React from "react";
import "./CheckoutItemStyles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
				<span className="name">{name}</span>
				<span className="quantity">{quantity}</span>
				<span className="price">{price}</span>
				<div className="remove-button">&#10005;</div>
			</div>
		</div>
	);
};

export default CheckoutItem;
