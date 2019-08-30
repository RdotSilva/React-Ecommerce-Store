import React, { Component } from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebaseUtils";

import "./RegisterStlyes.scss";

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <div></div>;
	}
}

export default Register;
