import React from "react";
import { connect } from "react-redux";
import "./CartDropdownStyles.scss";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
				<CustomButton>GO TO CHECKOUT</CustomButton>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
