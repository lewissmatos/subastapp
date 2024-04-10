import { Box, Typography } from "@mui/material";
import "./login.scss";
import { BasicInput } from "../Basic";
import BasicButton from "../Basic/BasicButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e: any) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		});
	};

	const goToSignup = () => {
		navigate("/sign-up");
	};

	const onLogin = () => {
		localStorage.setItem("isLogged", "1");
		navigate("/dashboard/subastas");
		window.location.reload();
	};

	return (
		<Box className="login-screen">
			<Typography sx={{ fontSize: 60, mb: 4 }}>SubastApp</Typography>
			<Typography sx={{ fontSize: 40, mb: 2 }}>Iniciar sesión</Typography>
			<Box className="login-form__container">
				<BasicInput
					onChange={handleInputChange}
					label="Email"
					name="email"
					type="email"
				/>
				<BasicInput
					onChange={handleInputChange}
					label="Contraseña"
					type="password"
					name="password"
				/>
				<BasicButton style={{ width: "100%" }} onClick={onLogin}>
					Iniciar sesión
				</BasicButton>
				<Typography sx={{ fontSize: 14, mt: 2 }}>
					¿No tienes una cuenta?{" "}
					<span onClick={goToSignup} className="link">
						Regístrate
					</span>
				</Typography>
			</Box>
		</Box>
	);
};

export default LoginScreen;
