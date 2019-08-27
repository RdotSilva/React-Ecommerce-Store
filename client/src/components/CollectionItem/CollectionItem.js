import React from "react";

import "./CollectionItemStyles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<div className="collection-item">
			<div className="image"></div>
		</div>
	);
};

export default CollectionItem;
