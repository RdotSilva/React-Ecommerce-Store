import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import "./CollectionStyles.scss";

const Collection = ({ match }) => {
	console.log(match.params.collectionId);
	return (
		<div className="collection-page">
			<h2>Collection Page</h2>
		</div>
	);
};

export default Collection;
