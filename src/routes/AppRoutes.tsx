import { Navigate, Route, Routes } from "react-router-dom";
import SignupScreen from "../components/Login/SignupScreen";
import LoginScreen from "../components/Login/LoginScreen";
import BasicLayout from "../components/Basic/BasicLayout";
import CreateAuctionForm from "../components/Auction/CreateAuctionForm";
import AuctionsList from "../components/Auction/AuctionsList";
import AuctionDetails from "../components/Auction/AuctionDetails";

const AppRoutes = () => {
	const isLogged = Boolean(Number(localStorage.getItem("isLogged")));
	return (
		<Routes>
			<Route
				path="/*"
				element={<Navigate to={isLogged ? `/dashboard/` : `/login`} replace />}
			/>

			{isLogged ? (
				<Route element={<BasicLayout />}>
					{/* Default route */}
					<Route
						path={`/dashboard/`}
						element={<Navigate to={`/dashboard/subastas`} replace />}
					/>
					<Route path="/dashboard/subastas" element={<AuctionsList />} />
					<Route path="/dashboard/subastas/:id" element={<AuctionDetails />} />
					<Route
						path="/dashboard/crear-subasta"
						element={<CreateAuctionForm />}
					/>
				</Route>
			) : (
				<>
					<Route path="/login" element={<LoginScreen />} />
					<Route path="/sign-up" element={<SignupScreen />} />
				</>
			)}
		</Routes>
	);
};

export default AppRoutes;
