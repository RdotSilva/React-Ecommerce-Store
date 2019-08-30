import React, { Component } from "react";
import "./LoginStyles.scss";

import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import { signInWithGoogle, auth } from "../../firebase/firebaseUtils";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
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

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="Password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Google sign in
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
