import React from "react";

import { selectCollections } from "../../redux/shop/shopSelectors";

const Shop = ({ collections }) => {
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
};

export default Shop;
