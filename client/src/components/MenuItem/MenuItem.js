import React from "react";

import "./MenuItemStyles.scss";

const MenuItem = ({ title }) => (
	<div className="menu-item">
		<div className="content">
			<div className="title">{title}</div>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default MenuItem;
