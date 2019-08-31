import "./CartIconStyles.scss";
import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartActions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
	return (
		<div className="cart-icon">
			<ShoppingIcon className="shopping-icon">
				<span className="item-count">0</span>
			</ShoppingIcon>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default CartIcon;
