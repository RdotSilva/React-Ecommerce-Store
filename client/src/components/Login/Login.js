import React, { Component } from "react";
import "./LoginStyles.scss";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form>
					<input name="email" type="email" value={this.state.email} required />
					<label>Email</label>
				</form>
			</div>
		);
	}
}

export default Login;
