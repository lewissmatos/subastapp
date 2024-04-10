import { Box, Typography } from "@mui/material";
import "./login.scss";
import { BasicInput } from "../Basic";
import BasicButton from "../Basic/BasicButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupScreen = () => {
	const navigate = useNavigate();
	const [signupData, setSignupData] = useState({
		name: "",
		lastname: "",
		email: "",
		password: "",
		repeatPassword: "",
	});

	const handleInputChange = (e: any) => {
		setSignupData({
			...signupData,
			[e.target.name]: e.target.value,
		});
	};

	const goToSignup = () => {
		navigate("/login");
	};

	return (
		<Box className="login-screen">
			<Typography sx={{ fontSize: 60, mb: 4 }}>SubastApp</Typography>
			<Typography sx={{ fontSize: 40, mb: 2 }}>Registrarse</Typography>
			<Box className="login-form__container">
				<BasicInput onChange={handleInputChange} label="Nombre" name="name" />
				<BasicInput
					onChange={handleInputChange}
					label="Apellidos"
					name="lastName"
				/>
				<BasicInput
					onChange={handleInputChange}
					label="E-mail"
					name="email"
					type="email"
				/>
				<BasicInput
					onChange={handleInputChange}
					label="Dirección"
					name="address"
				/>
				<BasicInput
					onChange={handleInputChange}
					label="Contraseña"
					type="password"
					name="password"
				/>

				<BasicButton style={{ width: "100%" }}>Registrarse</BasicButton>
				<Typography sx={{ fontSize: 14, mt: 2 }}>
					¿Ya estás registrado?{" "}
					<span onClick={goToSignup} className="link">
						Iniciar sesión
					</span>
				</Typography>
			</Box>
		</Box>
	);
};

export default SignupScreen;
