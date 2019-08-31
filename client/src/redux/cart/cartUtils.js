export const addItemToCart = (cartItems, cartItemToAdd) => {
	// Check if cart item already exists
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	// If cart item exists increment quantity by 1.
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// If cart item doesn't exist add it and init quantity to 1.
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
