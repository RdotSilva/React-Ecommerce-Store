import React from "react";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cartActions";
import CustomButton from "../CustomButton/CustomButton";
import "./CollectionItemStyles.scss";

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => {
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton inverted>Add to card</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem);
