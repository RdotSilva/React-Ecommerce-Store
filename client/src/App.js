import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/Homepage";

const HatsPage = () => {
	return <h1> Hats Page</h1>;
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
