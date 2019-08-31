import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		// Redux action coming in from mapDispatchToProps.
		const { setCurrentUser } = this.props;

		// Stores user into db if user is authenticated.
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// Add user data to state.
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				// If user logs out set current user to null.
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
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

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
	null,
	mapDispatchToProps
)(App);
