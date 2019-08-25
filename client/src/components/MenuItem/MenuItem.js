import React from "react";

import "./MenuItemStyles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
	<div className={`${size} menu-item`}>
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

export default MenuItem;
