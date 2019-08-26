import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItemStyles.scss";

const MenuItem = ({ title, imageUrl, size, history }) => (
	<div className={`${size} menu-item`} onClick={() => history.push()}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		></div>
		<div className="content">
			<div className="title">{title.toUpperCase()}</div>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
