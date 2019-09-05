import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import "./CategoryStyles.scss";

const Category = ({ match }) => {
	console.log(match.params.categoryId);
	return (
		<div className="category">
			<h2>Category Page</h2>
		</div>
	);
};

export default Category;
