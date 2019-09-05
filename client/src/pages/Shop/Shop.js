import React from "react";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

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
