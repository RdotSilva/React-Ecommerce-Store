import React from "react";
import { connect } from "react-redux";
import "./CartDropdownStyles.scss";
import { withRouter } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartDropdown = ({ cartItems, history }) => {
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
				<CustomButton
					onClick={() => {
						history.push("/checkout");
						toggleCartHidden();
					}}
				>
					GO TO CHECKOUT
				</CustomButton>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
});

export default withRouter(
	connect(
		mapStateToProps,
		{ toggleCartHidden }
	)(CartDropdown)
);
