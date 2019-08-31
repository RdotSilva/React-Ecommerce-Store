import React from "react";
import { connect } from "react-redux";
import "./CartDropdownStyles.scss";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				<CustomButton>GO TO CHECKOUT</CustomButton>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

export default CartDropdown;
