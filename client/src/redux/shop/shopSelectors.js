import { createSelector } from "reselect";

const collectionIdMap = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);
