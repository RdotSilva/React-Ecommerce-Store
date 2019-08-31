import React from "react";
import { connect } from "react-redux";
import "./CartDropdownStyles.scss";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
				<CustomButton>GO TO CHECKOUT</CustomButton>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

export default connect(mapStateToProps)(CartDropdown);
