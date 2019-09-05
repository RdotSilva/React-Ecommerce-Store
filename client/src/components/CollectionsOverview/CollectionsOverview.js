import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

import "./CollectionsOverviewStyles.scss";

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview
					key={id}
					{...otherCollectionProps}
				></CollectionPreview>
			))}
		</div>
	);
};

export default CollectionsOverview;
