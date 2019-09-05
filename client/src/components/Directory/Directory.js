import React, { Component } from "react";
import { connect } from "react-redux";

import MenuItem from "../MenuItem/MenuItem";

import "./DirectoryStyles.scss";

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{this.state.sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

export default Directory;
