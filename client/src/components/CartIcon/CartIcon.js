import "./CartIconStyles.scss";
import React from "react";
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

export default CartIcon;
