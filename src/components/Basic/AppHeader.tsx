import { Box, Grid, Typography } from "@mui/material";
import "./basic-style.scss";
import { BasicButton, BasicIconButton } from "../Basic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
// Define the AppHeader functional component
const AppHeader = ({ xs }: { xs: number }) => {
	const navigate = useNavigate();
	const userFullname = `Avely`;
	const goBack = () => {
		navigate(-1);
	};
	const onLogout = () => {
		localStorage.setItem("isLogged", "0");
		navigate("/login");
		window.location.reload();
	};

	const onGoToHome = () => {
		navigate("/");
	};

	return (
		<Grid item xs={xs} className="app-header-container">
			<Box className="app-header-content">
				<Typography
					onClick={onGoToHome}
					sx={{ fontSize: 30, mr: 4, cursor: "pointer" }}
				>
					SubastApp
				</Typography>

				<BasicIconButton
					remix="text"
					sx={{ color: Colors.red }}
					onClick={onLogout}
				>
					<Logout />
				</BasicIconButton>
			</Box>
		</Grid>
	);
};

// Export the AppHeader component as the default export
export default AppHeader;
