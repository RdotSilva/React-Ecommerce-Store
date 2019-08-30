import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		// Stores user into db if user is authenticated.
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// Add user data to state.
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				// If user logs out set current user to null.
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
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
