import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelectors";

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

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default Collection;
