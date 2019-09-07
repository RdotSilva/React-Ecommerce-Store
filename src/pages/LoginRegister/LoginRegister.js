import React from "react";
import "./LoginRegister.scss";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const LoginRegister = () => {
	return (
		<div className="sign-in-and-sign-up">
			<Login />
			<Register />
		</div>
	);
};

export default LoginRegister;
