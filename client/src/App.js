import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

import { auth } from "./firebase/firebaseUtils";

class App extends Component() {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={LoginRegister} />
				</Switch>
			</div>
		);
	}
}

export default App;
