import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";

const Shop = ({ match }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
		</div>
	);
};

export default Shop;
