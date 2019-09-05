import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import Category from "../Collection/Collection";

const Shop = ({ match }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:categoryId`} component={Category} />
		</div>
	);
};

export default Shop;
