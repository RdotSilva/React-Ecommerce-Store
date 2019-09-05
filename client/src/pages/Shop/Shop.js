import React from "react";
import { connect } from "react-redux;";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { selectShopItems } from "../../redux/shop/shopSelectors";

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

export default connect(mapStateToProps)(Shop);
