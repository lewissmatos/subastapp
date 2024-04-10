import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import SideDrawer from "../SideDrawer/SideDrawer";

const LayoutComponent = () => (
	<Grid
		item
		xs={12}
		sx={{
			padding: { xs: "1rem 0", md: "10px" },
			mt: "64px",
		}}
	>
		<Outlet />
	</Grid>
);

const BasicLayout = () => {
	return (
		<Grid container sx={{ height: "100%", width: "100%" }}>
			<Grid
				item
				sx={{
					zIndex: "9999",
					display: { xs: "none", md: "inherit" },
					transition: "all 0.3s ease-in-out",
				}}
				xs={2}
			>
				<SideDrawer />
			</Grid>
			<Grid
				item
				xs={10}
				sx={{
					transition: "all 0.3s ease-in-out",
				}}
			>
				<Grid container spacing={0}>
					<Grid item xs={12}>
						<AppHeader xs={12} />
					</Grid>
					<LayoutComponent />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default BasicLayout;
