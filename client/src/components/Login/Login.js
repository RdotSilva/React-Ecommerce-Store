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

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={handleSubmit}>
					<input name="email" type="email" value={this.state.email} required />
					<label>Email</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						required
					/>
					<label>Password</label>
					<input type="submit" value="Submit Form" />
				</form>
			</div>
		);
	}
}

export default Login;
