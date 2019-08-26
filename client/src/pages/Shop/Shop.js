import React, { Component } from "react";
import SHOP_DATA from "./ShopData";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class Shop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		const { collections } = this.state;

		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview
						key={id}
						{...otherCollectionProps}
					></CollectionPreview>
				))}
			</div>
		);
	}
}

export default Shop;
